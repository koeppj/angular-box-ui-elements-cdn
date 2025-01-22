import { TestBed } from '@angular/core/testing';

import { DisplayBoxResponseService } from './display-box-service.service';

describe('DisplayBoxServiceService', () => {
  let service: DisplayBoxResponseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisplayBoxResponseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
