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
    content: 'Do you really want to perform this action?',
    cancel: 'Cancel',
    confirm: 'Confirm',
    icon: 'check',
    button: 'btn-success'
  }

  DELETE = {
    heading: 'Confirm delete action',
    content: 'Do you really want to delete this item?',
    icon: 'trash',
    button: 'btn-danger'
  }

  open(config = null) {
  	const modalRef = this.modal.open(ModalComponent);
    if (config === null) {
      config = this.defaultModalConfig;
    } else {
      config = _.merge(this.defaultModalConfig, config);
    }
    modalRef.componentInstance.modal = config;
    return modalRef.result;
  }

  delete() {
    return this.open(this.DELETE);
  }

}
