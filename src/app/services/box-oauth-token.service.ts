import { Injectable } from '@angular/core';
import { AppRoutingModule } from '@app/app-routing.module';
import { BehaviorSubject, Observable, from, of } from 'rxjs';
import { BoxTokenStorageService } from './box-token-storage.service';
import { BoxClient, BoxOAuth, OAuthConfig } from 'box-typescript-sdk-gen';
import { environment } from '@environment/environment';
import { AccessToken } from 'box-typescript-sdk-gen/lib/schemas/accessToken.generated';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BoxOauthTokenService {

  private isAuthenticatedSubect$ = new BehaviorSubject<boolean>(false);
  public isAuthenticated$ = this.isAuthenticatedSubect$.asObservable();

  private isDoneLoadingSubject$ = new BehaviorSubject<boolean>(false);
  public isDoneLoading$ = this.isDoneLoadingSubject$.asObservable();

  private accessTokenSubject$ = new BehaviorSubject<string | undefined>(undefined);
  public accessToken$ = this.accessTokenSubject$.asObservable();

  private authMessageSubject$ = new BehaviorSubject<string>('');
  public authMessage$ = this.authMessageSubject$.asObservable();

  boxClient!: BoxClient;
  boxOAuth: BoxOAuth;

  constructor(private router: Router, 
              private boxTokenStorage: BoxTokenStorageService) {
    const oAuthConfig = new OAuthConfig({
      clientId: environment.BoxClientID,
      clientSecret: environment.BoxClientSecret,
      tokenStorage: boxTokenStorage
    })
    this.boxOAuth = new BoxOAuth({config: oAuthConfig});

    this.boxTokenStorage.tokenPresent().then(present => {
      if (present) {
        this.refreshToken()
      }
    })

    window.addEventListener('storage', (event) => {
      if (event.key !== BoxTokenStorageService.keyName && event.key !== null) {
        console.log("Logging Captured...");
        return;
      }
      this.refreshToken();
    })
  }

  public getAuthURL(redirectUri: string): string {
    return this.boxOAuth.getAuthorizeUrl({redirectUri: redirectUri});
  }

  public async validateCode(code: string)  {
    await this.boxOAuth.getTokensAuthorizationCodeGrant(code)
    .then(token => {
      this.boxClient = new BoxClient({auth: this.boxOAuth});
      this.authMessageSubject$.next("Authenticaed");
      this.accessTokenSubject$.next(token.accessToken);
      this.isAuthenticatedSubect$.next(true);
    })
    .catch(error => {
      this.authMessageSubject$.next(error.message);
      this.accessTokenSubject$.next(undefined);
      this.isAuthenticatedSubect$.next(false);
    });
  }

  private refreshToken() {
    this.boxOAuth.refreshToken().then(token => {
      this.isAuthenticatedSubect$.next(true);
      this.accessTokenSubject$.next(token.accessToken)
      this.authMessageSubject$.next("Token Retrieved...");
    }).catch(err => {
      this.isAuthenticatedSubect$.next(false);
      this.accessTokenSubject$.next(undefined);
      this.authMessageSubject$.next(err.message);
    })
  }            
}
