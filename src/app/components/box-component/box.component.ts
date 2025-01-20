import { Component, Renderer2, Input, AfterViewInit, OnDestroy, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { HeadService } from '@app/services/head.service';
import { BoxComponentsType } from '@app/enums/box-component-enum';
import { Subscription } from 'rxjs';
const _ = require('lodash');

declare let Box: any;

export interface BoxComponentInterface {
  folderId: string;
  boxCdnJS: string;
  boxCdnCss: string;
  name: BoxComponentsType;
  options: any
}

@Component({
    selector: 'box-component',
    templateUrl: './box.component.html',
    styleUrls: ['./box.component.scss'],
    standalone: false
})

export class BoxComponent implements AfterViewInit, OnInit, OnChanges {
  @Input() accessToken: string | undefined = '';
  @Input() componentData: BoxComponentInterface = {
    folderId: '',
    boxCdnJS: '',
    boxCdnCss: '',
    name: BoxComponentsType.ContentExplorer,
    options: null
  };
  boxToken: string | undefined;
  private subscription!: Subscription;
  private opts!: any;
  private boxComponentInstance!: any;

  constructor(
    private renderer: Renderer2,
    private headService: HeadService,
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
    if (this.componentData.name) {
      this.loadJs(this.componentData.boxCdnJS)
      this.loadCss(this.componentData.boxCdnCss)
    }
  }

  private loadCss(href: string):void {
    if (href === '' || this.headService.isStylesheetLoaded(href)) return
    const styleElement = this.headService.loadStylesheetLink(this.renderer, href);

    styleElement.onerror = () => {
      console.warn(`Could not load ${this.componentData.name} Stylesheet!`);
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
      console.warn(`Could not load ${this.componentData.name} Script!`);
    }
  }

  private initializeComponent(): void { 
    console.debug("initializeComponent...");
    this.boxComponentInstance = new Box[this.componentData.name]();

    this.opts = _.merge({},{container: `#${this.componentData.name.toLowerCase()}`},this.componentData.options);
    this.boxComponentInstance.show(this.componentData.folderId, this.accessToken, this.opts);
  }

  private reloadCompent(): void {
    if (this.boxComponentInstance) {
      this.boxComponentInstance.hide();
      this.boxComponentInstance.show(this.componentData.folderId, this.accessToken, this.opts);
    }
  }

}

