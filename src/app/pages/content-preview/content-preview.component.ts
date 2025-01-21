import { Component } from '@angular/core';
import { BoxComponentsType } from '@app/enums/box-component-enum';
import { environment } from '@environment/environment';
import { BoxOauthTokenService } from '@app/services/box-oauth-token.service';

@Component({
    selector: 'content-Preview',
    templateUrl: './content-preview.component.html',
    styleUrls: ['./content-preview.component.scss'],
    standalone: false
})

export class ContentPreviewComponent {

  fileId = environment.BoxPreviewFileID;

  contentPreview = {
    // Get CDN links from https://developer.box.com/guides/embed/ui-elements/installation/#manual-installation
    boxCdnJS: 'https://cdn01.boxcdn.net/platform/elements/22.0.0/en-US/preview.js',
    boxCdnCss: 'https://cdn01.boxcdn.net/platform/elements/22.0.0/en-US/preview.css',
    name: BoxComponentsType.ContentPreview,
    options: {
      contentSidebarProps: {
        hasAccessStats: true,
        hasMetadata: true,
      },
      canDownload: true, 
      hasMetadata: true,
      hasHeader: true}
  }

  constructor(public boxOAuthService: BoxOauthTokenService) {}

  public onFileIdChange(folderId: string) {
    this.fileId = folderId;
  }


}
