import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Topic } from '../topic';
import { TopicsService } from '../topics.service';

@Component({
  selector: 'app-topic-detail',
  templateUrl: './topic-detail.component.html',
  styleUrls: ['./topic-detail.component.scss']
})
export class TopicDetailComponent implements OnInit {
  topic: Topic;
  subnavItems = [
    {
      title: "Back",
      icon: "chevron-circle-left",
      routerLink: "/topics"
    }
  ]

  constructor(
    private route: ActivatedRoute,
    private TopicsService: TopicsService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getTopic()
  }

  submitForm(topic: Topic) {
    if (topic !== null ) {
      topic.id = this.topic.id;
      return this.TopicsService.update(topic)
    }
  }

  getTopic(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.TopicsService.getTopic(id)
      .subscribe(topic => this.topic = topic);
  }
  
  goBack(): void {
    this.location.back();
  }

}
