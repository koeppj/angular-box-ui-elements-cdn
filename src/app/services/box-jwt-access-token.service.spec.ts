import { TestBed } from '@angular/core/testing';

import { BoxJwtAccessTokenService } from './box-jwt-access-token.service';

describe('BoxJwtAccessTokenService', () => {
  let service: BoxJwtAccessTokenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoxJwtAccessTokenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
