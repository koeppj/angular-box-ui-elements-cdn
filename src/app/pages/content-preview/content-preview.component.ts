import { Component } from '@angular/core';
import { BoxComponentsType } from '@app/enums/box-component-enum';
import { environment } from '@environment/environment';

@Component({
  selector: 'content-Preview',
  templateUrl: './content-preview.component.html',
  styleUrls: ['./content-preview.component.scss']
})

export class ContentPreviewComponent {
  contentPreview = {
    folderId: environment.BoxPreviewFileID,
    // Get CDN links from https://developer.box.com/guides/embed/ui-elements/installation/#manual-installation
    boxCdnJS: 'https://cdn01.boxcdn.net/platform/elements/21.0.0/en-US/preview.js',
    boxCdnCss: 'https://cdn01.boxcdn.net/platform/elements/21.0.0/en-US/preview.css',
    name: BoxComponentsType.ContentPreview,
    options: {canDownload: true, hasHeader: true}
  }
}
