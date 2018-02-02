import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Topic } from '../topics-list/topics';
import { TopicsService } from '../topics-list/topics.service';

@Component({
  selector: 'app-topic-detail',
  templateUrl: './topic-detail.component.html',
  styleUrls: ['./topic-detail.component.scss']
})
export class TopicDetailComponent implements OnInit {
  @Input() topic: Topic;

  constructor(
    private route: ActivatedRoute,
    private topicsService: TopicsService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getTopic()
  }

  getTopic(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    /*this.topicsService.getTopic(id)
      .subscribe(topic => this.topic = topic)*/
  }
  
  goBack(): void {
    this.location.back();
  }

  save(): void {
    /*this.topicsService.updateTopic(this.topic)
      .subscribe(() => this.goBack());*/
  }

}
