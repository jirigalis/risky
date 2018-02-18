import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { TopicsService } from '../topics.service';
import { ModalService } from '../../shared/modal/modal.service';
import { Topic } from '../topic';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

import { ModalDeleteComponent } from '../../shared/modal/modal-delete/modal-delete.component';

@Component({
  selector: 'topics-list',
  templateUrl: './topics-list.component.html',
  styleUrls: ['./topics-list.component.scss']
})
export class TopicsListComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private topic: TopicsService,
    private ModalService: ModalService,
    private modalService: NgbModal,
  ) { }

  topics: Topic[];
  subnavItems = [
    {
      title: "Add new Topic",
      icon: "plus-circle",
      routerLink: "/topics/new"
    }
  ];

  closeResult: String;

  ngOnInit():void {
    this.topic.getTopics()
      .subscribe(topics => this.topics = topics)
  }

  test() {
    this.ModalService.delete();
  }

  open(content) {
    const modalRef = this.modalService.open(ModalDeleteComponent);
    modalRef.componentInstance.name = 'World';
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}
