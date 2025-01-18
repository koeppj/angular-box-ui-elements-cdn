import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenStorage } from 'box-typescript-sdk-gen/lib/box/tokenStorage.generated';
import { AccessToken } from 'box-typescript-sdk-gen/lib/schemas/accessToken.generated';

@Injectable({
  providedIn: 'root'
})
export class BoxTokenStorageService  implements TokenStorage {

  public static keyName = "NLRB Storage";

  constructor() { }
  store(token: AccessToken): Promise<undefined> {
    localStorage.setItem(BoxTokenStorageService.keyName,JSON.stringify(token));
    return Promise.resolve(undefined);
  }
  get(): Promise<undefined | AccessToken> {
    let tokenStr = localStorage.getItem(BoxTokenStorageService.keyName);
    if (tokenStr) {
      return Promise.resolve(JSON.parse(tokenStr))
    }
    else {
      return Promise.resolve(undefined);
    }
  }
  clear(): Promise<undefined> {
    localStorage.removeItem(BoxTokenStorageService.keyName);
    return Promise.resolve(undefined);
  }

  tokenPresent(): Promise<boolean> {
    return Promise.resolve(localStorage.getItem(BoxTokenStorageService.keyName) !== null);
  }

}
