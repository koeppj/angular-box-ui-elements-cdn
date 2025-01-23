import { Component, Input, Renderer2, SimpleChanges } from '@angular/core';
import { BoxComponentsType } from '@app/enums/box-component-enum';
import { HeadService } from '@app/services/head.service';
const _ = require('lodash');

declare let Box: any;

@Component({
    selector: 'content-explorer',
    templateUrl: './content-explorer.component.html',
    styleUrls: ['./content-explorer.component.scss'],
    standalone: false
})

export class ContentExplorerComponent  {

  boxCdnJS = "https://cdn01.boxcdn.net/platform/elements/21.0.0/en-US/explorer.js";
  boxCdnCss = "https://cdn01.boxcdn.net/platform/elements/21.0.0/en-US/explorer.css";
  boxComponent = BoxComponentsType.ContentExplorer;

  @Input() accessToken: string | undefined = '';
  @Input() entityId: string | undefined = '0';
  @Input() componentId: string | undefined = 'box-abstact-component';
  @Input() options: any = {};
  boxToken: string | undefined;
  private opts!: any;
  private boxComponentInstance!: any;

  constructor(
    private renderer: Renderer2,
    private headService: HeadService,
  ) 
  {    
    console.log("Constructing COntentExplorerComponent");
  }


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
      this.loadJs(this.boxCdnJS)
      this.loadCss(this.boxCdnCss)
  }

  private loadCss(href: string):void {
    if (href === '' || this.headService.isStylesheetLoaded(href)) return
    const styleElement = this.headService.loadStylesheetLink(this.renderer, href);

    styleElement.onerror = () => {
      console.warn(`Could not load ${this.boxComponent} Stylesheet!`);
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
      console.warn(`Could not load ${this.boxComponent} Script!`);
    }
  }

  private initializeComponent(): void { 
    console.debug("initializeComponent...");
    this.boxComponentInstance = new Box[this.boxComponent]();

    this.opts = _.merge({},{container: `#${this.boxComponent.toLowerCase()}`},this.options);
    console.debug(`this.opts: ${JSON.stringify(this.opts)}`);
    console.log(this.opts);
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

