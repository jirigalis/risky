import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

import { Question } from '../question';
import { Topic } from '../../topics/topic';
import { QuestionService } from '../question.service';
import { TopicsService } from '../../topics/topics.service';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent implements OnInit {

  questions: Question[];
  topics: Topic[];
  subnavItems = [
    {
      title: "Add new question",
      icon: "plus-circle",
      routerLink: "/questions/new"
    }
  ];
  
  constructor(
    private QuestionService: QuestionService,
    private TopicsService: TopicsService
  ) { }

  ngOnInit() {
    this.QuestionService.getQuestions()
      .subscribe(questions => this.questions = questions)

    this.TopicsService.getTopics()
      .subscribe(topics => this.topics = topics)
  }

  fetchTopics(topics) {
    let topicStrings = [];
    _.each(topics, t => {
      let topicStr = _.find(this.topics, {id: t});
      topicStrings.push(topicStr.name);
    })
    return topicStrings;
  }

}
