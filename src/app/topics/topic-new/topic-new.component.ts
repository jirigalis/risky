import { Component, OnInit } from '@angular/core';

import { Topic } from '../topic';
import { TopicsService } from '../topics.service';

@Component({
  selector: 'app-topic-new',
  templateUrl: './topic-new.component.html',
  styleUrls: ['./topic-new.component.scss']
})
export class TopicNewComponent implements OnInit {
	subnavItems = [
	{
		title: "Back",
		icon: "chevron-circle-left",
		routerLink: "/topics"
	}
  ]

  constructor(private TopicsService: TopicsService) { }

  ngOnInit() {
  }

  submitForm(topic: Topic) {
	if (topic !== null ) {
		return this.TopicsService.create(topic)
	}
	return false;
  }

}
