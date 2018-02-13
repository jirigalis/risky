import { Component, OnInit } from '@angular/core';

import { Question } from '../question';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent implements OnInit {

  questions: Question[];
  subnavItems = [
    {
      title: "Add new question",
      icon: "plus-circle",
      //routerLink: "new"
      action: this.foo2
    },
  ];
  
  constructor(
    private QuestionService: QuestionService
  ) { }

  ngOnInit() {
    this.QuestionService.getQuestions()
      .subscribe(questions => this.questions = questions)
  }

  foo2() {
    return () => { console.log('FOO') };
  }

  foo() {
    console.log('BAR');
  }

}
