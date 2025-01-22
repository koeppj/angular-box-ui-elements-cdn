import { Component } from '@angular/core';
import { BoxComponentsType } from '@app/enums/box-component-enum';
import { BoxOauthTokenService } from '@app/services/box-oauth-token.service';
import { File } from 'box-typescript-sdk-gen/lib/schemas/file.generated';
import { environment } from '@environment/environment';

@Component({
  selector: 'app-content-upload-metadata',
  templateUrl: './content-upload-metadata.component.html',
  styleUrl: './content-upload-metadata.component.scss',
  standalone: false
})
export class ContentUploadMetadataComponent {

  public folderId = '0';
  contentUploader = {
    // Get CDN links from https://developer.box.com/guides/embed/ui-elements/installation/#manual-installation
    boxCdnJS: 'https://cdn01.boxcdn.net/platform/elements/22.0.0/en-US/uploader.js',
    boxCdnCss: 'https://cdn01.boxcdn.net/platform/elements/22.0.0/en-US/uploader.css',
    name: BoxComponentsType.ContentUploader,
    options: {
      onComplete: this.onFileUpload
    }
  }

  constructor(public boxOAuthService: BoxOauthTokenService) {}

  public onFolderIdChange(folderId: string) {
    this.folderId = folderId;
  }

  public onFileUpload(file: Array<File>) {
    console.log('File uploaded', file);
  }

}
