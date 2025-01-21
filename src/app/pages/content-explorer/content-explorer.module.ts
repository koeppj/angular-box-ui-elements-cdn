import { NgModule } from '@angular/core';
import { BoxComponent } from '@app/components/box-component/box.component';
import { BoxFolderInputComponent } from '@app/components/box-folder-input/box-folder-input.component';

@NgModule({
  declarations: [
    BoxComponent
  ],
  imports: [BoxFolderInputComponent],
  providers: [],
  bootstrap: []
})
export class ContentExplorerModule { }
