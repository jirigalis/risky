import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { Question } from '../question';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-question-new',
  templateUrl: './question-new.component.html',
  styleUrls: ['./question-new.component.scss']
})
export class QuestionNewComponent implements OnInit {

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
    public _DomSanitizer: DomSanitizer,
    ) { }

  ngOnInit() {
  }

  submitForm(question: Question) {
  	if (question !== null ) {
  		return this.QuestionService.create(question)
  	}
  	return false;
  }

}
