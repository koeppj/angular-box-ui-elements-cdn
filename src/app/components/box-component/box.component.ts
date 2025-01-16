import { Component, Renderer2, Input, AfterViewInit, OnDestroy, OnInit } from '@angular/core';
import { environment } from '@environment/environment';
import { HeadService } from '@app/services/head.service';
import { BoxComponentsType } from '@app/enums/box-component-enum';
import { Observable, Subscription } from 'rxjs';
import { BoxTokenService } from '@app/services/box-token.service';
import { BoxJwtAccessTokenService } from '@app/services/box-jwt-access-token.service';
import { AccessToken } from 'box-typescript-sdk-gen/lib/schemas/accessToken.generated';
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

export class BoxComponent implements AfterViewInit, OnInit, OnDestroy {
  @Input() componentData: BoxComponentInterface = {
    folderId: '',
    boxCdnJS: '',
    boxCdnCss: '',
    name: BoxComponentsType.ContentExplorer,
    options: null
  };
  boxToken!: string;
  private subscription!: Subscription;
  private opts!: any;
  private boxComponentInstance!: any;
  private accessToken!: Observable<AccessToken>;

  constructor(
    private renderer: Renderer2,
    private headService: HeadService,
    private boxTokenService: BoxTokenService,
    private boxJwtAuthService: BoxJwtAccessTokenService
  ) { }

  ngOnInit(): void {
      this.subscription = this.boxTokenService.boxToken$.subscribe(value => {
        this.boxToken = value;
        console.log("Reloading Component!!!")
        this.reloadCompent();
      });
      /*
      this.boxJwtAuthService.getAccessToken().subscribe(value => {
        this.boxToken = value.accessToken!;
        console.log("Reloading Component!!!")
        this.reloadCompent();

      });
      */
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe;
  }

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
    this.boxComponentInstance = new Box[this.componentData.name]();

    this.opts = _.merge({},{container: `#${this.componentData.name.toLowerCase()}`},this.componentData.options);

    this.boxComponentInstance.show(this.componentData.folderId, this.boxToken, this.opts);
  }

  private reloadCompent(): void {
    if (this.boxComponentInstance) {
      this.boxComponentInstance.hide();
      this.boxComponentInstance.show(this.componentData.folderId, this.boxToken, this.opts);
    }
  }

}

