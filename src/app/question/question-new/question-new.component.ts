import { Component, OnInit } from '@angular/core';

import { Question } from '../question';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-question-new',
  templateUrl: './question-new.component.html',
  styleUrls: ['./question-new.component.scss']
})
export class QuestionNewComponent implements OnInit {

  subnavItems = [
    {
      title: "Back",
      icon: "plus-circle",
      routerLink: "/questions"
    }
  ]

  constructor(private QuestionService: QuestionService) { }

  ngOnInit() {
  }

  submitForm(question: Question) {
  	if (question !== null ) {
  		return this.QuestionService.create(question)
  	}
  	return false;
  }

}
