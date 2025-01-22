import { Component } from '@angular/core';
import { DisplayBoxResponseService } from '@app/components/display-box-response/display-box-service.service';
import { BoxComponentsType } from '@app/enums/box-component-enum';
import { BoxOauthTokenService } from '@app/services/box-oauth-token.service';

@Component({
    selector: 'content-explorer',
    templateUrl: './content-explorer.component.html',
    styleUrls: ['./content-explorer.component.scss'],
    standalone: false,
})

export class ContentExplorerComponent {
  contentExplorer = {
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
      contentOpenWithProps: { show: true },
      canShare: false,
      onPreview: this.onExplorerPreview
    }
  }

  public folderId = '0';

  constructor(public boxOAuthService: BoxOauthTokenService, private displayBoxResponseService: DisplayBoxResponseService) {
    this.onExplorerPreview = this.onExplorerPreview.bind(this);
  }

  public onExplorerPreview(file: any) {
    this.displayBoxResponseService.showDisplayBoxResponse(file);
    console.log(file);
  }

  public onFolderIdChange(folderId: string) {
    this.folderId = folderId;
  }
}
