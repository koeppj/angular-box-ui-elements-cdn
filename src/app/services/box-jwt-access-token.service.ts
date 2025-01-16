import { Injectable } from '@angular/core';
import { BoxJwtAuth, JwtConfig, BoxClient } from 'box-typescript-sdk-gen';
import { AccessToken } from 'box-typescript-sdk-gen/lib/schemas/accessToken.generated';
import { Observable, from } from 'rxjs';
const configFile = require('config/config.json');

@Injectable({
  providedIn: 'root'
})
export class BoxJwtAccessTokenService {

  private client!: BoxClient;

  constructor() {
    var config = JwtConfig.fromConfigJsonString(JSON.stringify(configFile));
    var boxJwtAuth = new BoxJwtAuth({config: config});
    this.client = new BoxClient({auth: boxJwtAuth});
   }

   getAccessToken():Observable<AccessToken> {
    return from(this.client.auth.refreshToken());
  }
}
