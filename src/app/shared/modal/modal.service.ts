import { Injectable } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './modal/modal.component';
import * as _ from 'lodash';

@Injectable()
export class ModalService {

  constructor(
    private modal: NgbModal
  ) { }

  defaultModalConfig = {
    heading: 'Confirm action',
    text: 'Do you really want to perform this action?',
    cancel: 'Cancel',
    confirm: 'Confirm'
  }

  delete() {

  }

  open(config = null) {
  	const modalRef = this.modal.open(ModalComponent);
    modalRef.componentInstance.name = 'World 2';
    console.log(config);
    if (config === null) {
      config = this.defaultModalConfig;
    } else {
      config = _.merge(this.defaultModalConfig, config);
    }
    modalRef.componentInstance.modal = config;
    return modalRef.result;
  }

}
