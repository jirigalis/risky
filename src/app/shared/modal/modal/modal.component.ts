import {Component, Input} from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() name;
  
  constructor(public activeModal: NgbActiveModal) {}
}
