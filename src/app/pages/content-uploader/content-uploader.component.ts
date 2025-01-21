import { Component } from '@angular/core';
import { BoxComponentsType } from '@app/enums/box-component-enum';
import { BoxOauthTokenService } from '@app/services/box-oauth-token.service';

@Component({
    selector: 'content-uploader',
    templateUrl: './content-uploader.component.html',
    styleUrls: ['./content-uploader.component.scss'],
    standalone: false
})

export class ContentUploaderComponent {

  public folderId = '0';
  contentUploader = {
    // Get CDN links from https://developer.box.com/guides/embed/ui-elements/installation/#manual-installation
    boxCdnJS: 'https://cdn01.boxcdn.net/platform/elements/22.0.0/en-US/uploader.js',
    boxCdnCss: 'https://cdn01.boxcdn.net/platform/elements/22.0.0/en-US/uploader.css',
    name: BoxComponentsType.ContentUploader,
    options: null
  }

  constructor(public boxOAuthService: BoxOauthTokenService) {}

  public onFolderIdChange(folderId: string) {
    this.folderId = folderId;
  }
}


