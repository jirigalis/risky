import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { TopicsService } from '../topics.service';
import { Topic } from '../topic';

@Component({
  selector: 'app-topics-list',
  templateUrl: './topics-list.component.html',
  styleUrls: ['./topics-list.component.scss']
})
export class TopicsListComponent implements OnInit {

  constructor(private http: HttpClient, private topic: TopicsService) { }

  topics: Topic[];

  ngOnInit():void {
    this.topic.getTopics()
      .subscribe(topics => this.topics = topics)
  }

}
