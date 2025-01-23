import { Component, Renderer2, Input, AfterViewInit, OnDestroy, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { HeadService } from '@app/services/head.service';
import { BoxComponentsType } from '@app/enums/box-component-enum';
import { Subscription } from 'rxjs';
const _ = require('lodash');

declare let Box: any;

@Component({
    selector: 'box-component',
    templateUrl: './box-abstract.component.html',
    styleUrls: ['./box-abstract.component.scss'],
    standalone: false
})

export abstract class BoxAbstractComponent implements AfterViewInit, OnInit, OnChanges {
  @Input() accessToken: string | undefined = '';
  @Input() entityId: string | undefined = '0';
  @Input() componentId: string | undefined = 'box-abstact-component';
  @Input() options: any = {};
  boxToken: string | undefined;
  private subscription!: Subscription;
  private opts!: any;
  private boxComponentInstance!: any;

  abstract readonly boxCdnJS: string;
  abstract readonly boxCdnCss: string;
  abstract readonly boxComponent: BoxComponentsType;

  constructor(
    protected renderer: Renderer2,
    protected headService: HeadService,
  ) { }


  ngOnChanges(changes: SimpleChanges): void {
    console.debug(`In ngOnChanges with accessToken ${this.accessToken}`);
    this.reloadCompent();
  }

  ngOnInit(): void {
    console.debug(`In ngOnInit with accessToken ${this.accessToken}`);
    this.reloadCompent()
  }

  ngAfterViewInit() {
    console.debug("in ngAfterViewInit...");
    if (this.componentId) {
      this.loadJs(this.boxCdnJS)
      this.loadCss(this.boxCdnCss)
    }
  }

  private loadCss(href: string):void {
    if (href === '' || this.headService.isStylesheetLoaded(href)) return
    const styleElement = this.headService.loadStylesheetLink(this.renderer, href);

    styleElement.onerror = () => {
      console.warn(`Could not load ${this.componentId} Stylesheet!`);
    }
  }

  private loadJs(src: string):void {
    console.debug("loadHs...");
    if (src === '') return
    if (this.headService.isScriptLoaded(src)) {
      this.initializeComponent()
      return
    }
    const scriptElement = this.headService.loadJsScript(this.renderer, src);

    scriptElement.onload = () => {
      this.initializeComponent()
    }

    scriptElement.onerror = () => {
      console.warn(`Could not load ${this.componentId} Script!`);
    }
  }

  private initializeComponent(): void { 
    console.debug("initializeComponent...");
    this.boxComponentInstance = new Box[this.boxComponent]();

    this.opts = _.merge({},{container: `#${this.componentId}`},this.options);
    console.debug(`this.opts: ${JSON.stringify(this.opts)}`);
    if (this.accessToken !== undefined) {
      this.boxComponentInstance.show(this.entityId, this.accessToken, this.opts);
    }
  }

  private reloadCompent(): void {
    if (this.boxComponentInstance) {
      this.boxComponentInstance.hide();
      this.boxComponentInstance.show(this.entityId, this.accessToken, this.opts);
    }
  }

}

