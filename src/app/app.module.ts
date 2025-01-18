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
import { PreBoxLoginComponent } from './pages/pre-box-login/pre-box-login.component';
import { PostBoxLoginComponent } from './pages/post-box-login/post-box-login.component';
import { BoxOauthStatusComponent } from './components/box-oauth-status/box-oauth-status.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    BoxComponent,
    ContentExplorerComponent,
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
    NgbModule
  ],
  providers: [
    HeadService,
    BoxTokenService,
    BoxJwtAccessTokenService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
