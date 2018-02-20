import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { TopicsService } from '../topics.service';
import { ModalService } from '../../shared/modal/modal.service';
import { Topic } from '../topic';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'topics-list',
  templateUrl: './topics-list.component.html',
  styleUrls: ['./topics-list.component.scss']
})
export class TopicsListComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private Topic: TopicsService,
    private ModalService: ModalService,
    private notify: NotificationsService
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
    this.fetchTopics();
  }

  private fetchTopics() {
    this.Topic.getTopics()
      .subscribe(topics => this.topics = topics);
  }

  delete(id) {
    this.ModalService.delete().then(res => {
    	if (res) {
        this.Topic.delete(id)
          .subscribe(res => {
            this.notify.success('Success', 'The topic was successfully deleted.')
            this.fetchTopics();
          }, err => {
            console.error(err);
            this.notify.error("An error occured", "Error during deleting a topic.")
          })
      }
    }).catch();
  }

}
