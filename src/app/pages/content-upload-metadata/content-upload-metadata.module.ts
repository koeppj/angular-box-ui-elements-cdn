import { NgModule } from '@angular/core';
import { BoxComponent } from '@app/components/box-component/box.component';
import { BoxFolderInputComponent } from '@app/components/box-folder-input/box-folder-input.component';
import { BoxComponentsType } from '@app/enums/box-component-enum';
import { BoxOauthTokenService } from '@app/services/box-oauth-token.service';

@NgModule({
  declarations: [
    BoxComponent,
  ],
  imports: [BoxFolderInputComponent],
  providers: [],
  bootstrap: []
})
export class ContentUploadMetadModule {}
