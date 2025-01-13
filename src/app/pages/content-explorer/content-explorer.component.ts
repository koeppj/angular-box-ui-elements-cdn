import { Component } from '@angular/core';
import { BoxComponentsType } from '@app/enums/box-component-enum';

@Component({
  selector: 'content-explorer',
  templateUrl: './content-explorer.component.html',
  styleUrls: ['./content-explorer.component.scss']
})

export class ContentExplorerComponent {
  contentExplorer = {
    folderId: '0',
    // Get CDN links from https://developer.box.com/guides/embed/ui-elements/installation/#manual-installation
    boxCdnJS: 'https://cdn01.boxcdn.net/platform/elements/21.0.0/en-US/explorer.js',
    boxCdnCss: 'https://cdn01.boxcdn.net/platform/elements/21.0.0/en-US/explorer.css',
    name: BoxComponentsType.ContentExplorer,
    options: null
  }
}
