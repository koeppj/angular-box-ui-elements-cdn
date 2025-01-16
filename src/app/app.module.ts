import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoxComponent } from '@app/components/box-component/box.component';
import { ContentExplorerComponent } from '@app/pages/content-explorer/content-explorer.component';
import { ContentUploaderComponent } from '@app/pages/content-uploader/content-uploader.component';
import { ContentPreviewComponent } from '@app/pages/content-preview/content-preview.component';
import { HeadService } from '@app/services/head.service';
import { BoxDevTokenPromptComponent } from './components/box-dev-token-prompt/box-dev-token-prompt.component';
import { BoxTokenService } from './services/box-token.service';
import { ReactiveFormsModule } from '@angular/forms';
import { BoxJwtAccessTokenService } from './services/box-jwt-access-token.service';

@NgModule({
  declarations: [
    AppComponent,
    BoxComponent,
    ContentExplorerComponent,
    ContentUploaderComponent,
    ContentPreviewComponent,
    BoxDevTokenPromptComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    HeadService,
    BoxTokenService,
    BoxJwtAccessTokenService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
