import { Component, Renderer2, Input, AfterViewInit } from '@angular/core';
import { environment } from '@environment/environment';
import { HeadService } from '@app/services/head.service';
import { BoxComponentsType } from '@app/enums/box-component-enum';
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
  styleUrls: ['./box.component.scss']
})

export class BoxComponent implements AfterViewInit {
  @Input() componentData: BoxComponentInterface = {
    folderId: '',
    boxCdnJS: '',
    boxCdnCss: '',
    name: BoxComponentsType.ContentExplorer,
    options: null
  };

  constructor(
    private renderer: Renderer2,
    private headService: HeadService,
  ) { }

  ngAfterViewInit() {
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
    const boxComponentInstance = new Box[this.componentData.name]();

    let opts = _.merge({},{container: `#${this.componentData.name.toLowerCase()}`},this.componentData.options);
    console.log("Opts:",JSON.stringify(opts));

    boxComponentInstance.show(this.componentData.folderId, environment.BoxDeveloperToken, opts);
  }
}

