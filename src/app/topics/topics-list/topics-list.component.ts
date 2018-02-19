import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { TopicsService } from '../topics.service';
import { ModalService } from '../../shared/modal/modal.service';
import { Topic } from '../topic';

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
    this.ModalService.open().then(res => {
    	console.log(res)
    }).catch();
  }

}
