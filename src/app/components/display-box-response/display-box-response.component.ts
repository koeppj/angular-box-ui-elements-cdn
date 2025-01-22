import { Component } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-display-box-response',
  imports: [JsonPipe],
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Display Box Response</h4>
      <button
        type="button"
        class="btn-close"
        aria-label="Close"
        (click)="close()"
      ></button>
    </div>
    <div class="modal-body">
      <pre>{{ data | json }}</pre>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-primary" (click)="close()">
        Close
      </button>
    </div>
  `
})
export class DisplayBoxResponseComponent {
  // This property is set from the service when opening the modal.
  data: any;

  constructor(public activeModal: NgbActiveModal) {}

  close() {
    this.activeModal.close();
  }
}
