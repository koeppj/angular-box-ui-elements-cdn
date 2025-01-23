import { Component } from '@angular/core';
import { BoxComponentsType } from '@app/enums/box-component-enum';
import { BoxOauthTokenService } from '@app/services/box-oauth-token.service';

@Component({
  selector: 'content-exployer-demo',
  templateUrl: './content-exployer-demo.component.html',
  styleUrl: './content-exployer-demo.component.scss',
  standalone: false
})

export class ContentExployerDemoComponent {

  folderId = '0';
  contentExplorer = {
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
    }
  }

  constructor(public boxOAuthService: BoxOauthTokenService) { 
  }

  onFolderIdChange(folderId: string) {
    this.folderId = folderId;
  }

  onFilePreview(event: any) 
  {
    console.log('File previewed', event);
  }
}
