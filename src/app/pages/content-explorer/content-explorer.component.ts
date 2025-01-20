import { Component } from '@angular/core';
import { BoxComponentsType } from '@app/enums/box-component-enum';
import { BoxOauthTokenService } from '@app/services/box-oauth-token.service';

@Component({
    selector: 'content-explorer',
    templateUrl: './content-explorer.component.html',
    styleUrls: ['./content-explorer.component.scss'],
    standalone: false
})

export class ContentExplorerComponent {
  contentExplorer = {
    folderId: '0',
    boxCdnJS: 'https://cdn01.boxcdn.net/platform/elements/22.0.0/en-US/explorer.js',
    boxCdnCss: 'https://cdn01.boxcdn.net/platform/elements/22.0.0/en-US/explorer.css',
    name: BoxComponentsType.ContentExplorer,
    options: {
      contentPreviewProps: {
        contentSidebarProps: {
          detailsSidebarProps: {
            hasProperties: true,
            hasAccessStats: true
          },
          hasMetadata: true,
          hasActivityFeed: true,
        }
      },
      canShare: false,
      onPreview: this.onExplorerPreview
    }
  }

  constructor(public boxOAuthService: BoxOauthTokenService) {}

  public onExplorerPreview(file: any) {
    console.log(file);
  }
}
