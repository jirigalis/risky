import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

import { QuestionService } from '../question.service';
import { TopicsService } from '../../topics/topics.service';
import { Question } from '../question';
import { Topic } from '../../topics/topic';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.scss']
})
export class QuestionDetailComponent implements OnInit {

  question: Question = new Question();
  subnavItems = [
    {
      title: "Back",
      icon: "chevron-circle-left",
      routerLink: "/questions"
    }
  ]

  constructor(
    private QuestionService: QuestionService,
    private TopicsService: TopicsService,
    private route: ActivatedRoute,
    public _DomSanitizer: DomSanitizer,
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.QuestionService.getQuestion(id)
      .subscribe(question => {
        this.question = question;
        this.question.attachment = question.attachment;
      });
  }

  submitForm(question: Question) {
    if (question !== null ) {
      question.id = this.question.id;
      return this.QuestionService.update(question)
    }
  }
}
