import { NgModule } from '@angular/core';
import { BoxComponent } from '@app/components/box-component/box.component';
import { BoxFileInputComponent } from '@app/components/box-file-input/box-file-input.component';

@NgModule({
  declarations: [
    BoxComponent,
  ],
  imports: [BoxFileInputComponent],
  providers: [],
  bootstrap: []
})
export class ContentPreviewModule { }
