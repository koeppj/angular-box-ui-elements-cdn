import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenStorage } from 'box-typescript-sdk-gen/lib/box/tokenStorage.generated';
import { AccessToken } from 'box-typescript-sdk-gen/lib/schemas/accessToken.generated';

@Injectable({
  providedIn: 'root'
})
export class BoxTokenStorageService  implements TokenStorage {

  constructor() { }
  store(token: AccessToken): Promise<undefined> {
    throw new Error('Method not implemented.');
  }
  get(): Promise<undefined | AccessToken> {
    throw new Error('Method not implemented.');
  }
  clear(): Promise<undefined> {
    throw new Error('Method not implemented.');
  }

}
