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
import { PreBoxLoginComponent } from './pages/pre-box-login/pre-box-login.component';
import { PostBoxLoginComponent } from './pages/post-box-login/post-box-login.component';
import { BoxOauthStatusComponent } from './components/box-oauth-status/box-oauth-status.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BoxFolderInputComponent } from "./components/box-folder-input/box-folder-input.component";
import { BoxFileInputComponent } from './components/box-file-input/box-file-input.component';
import { ContentUploadMetadataComponent } from './pages/content-upload-metadata/content-upload-metadata.component';
import { BoxOauthTokenService } from './services/box-oauth-token.service';

@NgModule({
  declarations: [
    AppComponent,
    BoxComponent,
    ContentExplorerComponent,
    ContentUploadMetadataComponent,
    ContentUploaderComponent,
    ContentPreviewComponent,
    BoxDevTokenPromptComponent,
    PreBoxLoginComponent,
    PostBoxLoginComponent,
    BoxOauthStatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    BoxFolderInputComponent,
    BoxFileInputComponent,
],
  providers: [
    HeadService,
    BoxTokenService,
    BoxOauthTokenService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
