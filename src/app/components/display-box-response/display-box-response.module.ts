import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { DisplayBoxResponseService } from './display-box-service.service';

@NgModule({
  imports: [
    NgbModalModule // Import ng-bootstrap's modal module
  ],
  providers: [
    DisplayBoxResponseService
  ]
})
export class DisplayBoxResponseModule {}
