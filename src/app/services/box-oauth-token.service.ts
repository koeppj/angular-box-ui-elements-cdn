import { Injectable } from '@angular/core';
import { AppRoutingModule } from '@app/app-routing.module';
import { Observable, from, of } from 'rxjs';
import { BoxTokenStorageService } from './box-token-storage.service';
import { BoxClient, BoxOAuth, OAuthConfig } from 'box-typescript-sdk-gen';

@Injectable({
  providedIn: 'root'
})
export class BoxOauthTokenService {

  boxClient!: BoxClient;

  constructor(appRoutingModule: AppRoutingModule, 
              boxTokenStorage: BoxTokenStorageService) {}
            
}
