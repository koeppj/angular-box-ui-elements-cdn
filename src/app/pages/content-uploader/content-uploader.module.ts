import { NgModule } from '@angular/core';
import { BoxComponent } from '@app/components/box-component/box.component';
import { BoxFolderInputComponent } from '@app/components/box-folder-input/box-folder-input.component';
import { DisplayBoxResponseService } from '@app/components/display-box-response/display-box-service.service';

@NgModule({
  declarations: [
    BoxComponent,
  ],
  imports: [BoxFolderInputComponent],
  providers: [DisplayBoxResponseService],
  bootstrap: [],
})
export class ContentUploaderModule { }
