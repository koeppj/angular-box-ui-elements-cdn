import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DisplayBoxResponseComponent } from './display-box-response.component';

@Injectable({  
  providedIn: 'root' 
})
export class DisplayBoxResponseService {
  constructor(private modalService: NgbModal) {}

  /**
   * Opens the Display Box Response modal.
   * @param responseData The JSON data to display.
   */
  showDisplayBoxResponse(responseData: any): void {
    const modalRef = this.modalService.open(DisplayBoxResponseComponent, {
      size: 'lg',         // Large modal size (optional)
      backdrop: 'static'  // Prevent closing by clicking outside (optional)
    });

    // Pass the JSON data into the component
    modalRef.componentInstance.data = responseData;
  }
}
