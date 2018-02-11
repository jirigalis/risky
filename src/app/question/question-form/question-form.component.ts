import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as _ from 'lodash';

import { Question } from '../question';
import { Topic } from '../../topics/topic';
import { QuestionService } from '../question.service';
import { TopicsService } from '../../topics/topics.service';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.scss']
})
export class QuestionFormComponent implements OnInit {

  @Input() question: Question;
  topics: Topic[];
  attachmentType = true;
  selectedTopicsCount = 1;

  questionForm: FormGroup;

  constructor(
    private QuestionService: QuestionService,
    private TopicsService: TopicsService,
    private location: Location,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.createForm();
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    
    this.TopicsService.getTopics()
      .subscribe(topics => {
        this.topics = topics;
      })  
  }

  ngOnChanges() {
    console.log("Call me! ");
    this.questionForm.reset({
      text: this.question.text,
      qtopics: [this.question.topics]
    });
  }

  createForm() {
    this.questionForm = this.fb.group({
      text: ['', Validators.required],
      qtopics: [],
      attachment: '',
      attachmentType: ''
    });
  }

  submitQuestion() {

  }

}
