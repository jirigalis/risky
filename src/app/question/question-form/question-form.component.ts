import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as _ from 'lodash';
import { NotificationsService } from 'angular2-notifications';

import { Question } from '../question';
import { Topic } from '../../topics/topic';
import { Level } from '../../level/level';
import { QuestionService } from '../question.service';
import { TopicsService } from '../../topics/topics.service';
import { LevelService } from '../../level/level.service';

@Component({
  selector: 'question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.scss']
})
export class QuestionFormComponent implements OnInit, OnChanges {

  @Input() question: Question;
  allTopics: Topic[];
  levels: Level[];

  questionForm: FormGroup;

  constructor(
    private QuestionService: QuestionService,
    private TopicsService: TopicsService,
    private LevelService: LevelService,
    private location: Location,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private notify: NotificationsService
  ) {
    this.createForm();
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    
    this.TopicsService.getTopics()
      .subscribe(topics => {
        this.allTopics = topics;
      })

    this.LevelService.getLevels()
      .subscribe(levels => this.levels = levels);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (typeof changes.question.currentValue !== "undefined") {
      this.questionForm.reset({
        text: this.question.text,
        topics: this.question.topics,
        attachmentType: 'base64',
        attachment: this.question.attachment,
        level: this.question.level
      });
    }
  }

  createForm() {
    this.questionForm = this.fb.group({
      text: new FormControl('', Validators.required),
      topics: new FormControl([], Validators.required),
      attachment: new FormControl(''),
      attachmentType: new FormControl(''),
      level: new FormControl('1000')
    });
  }

  submitQuestionForm() {
    if (this.questionForm.valid) {
      const id = this.question.id;
      this.question = this.questionForm.value;
      this.question.id = id;
      this.QuestionService.update(this.question)
        .subscribe(res => {
          this.notify.success("Success", 'The question was successfully updated.');
        })
    }
  }

  get text() {
    return this.questionForm.get('text');
  }

  get topics() {
    return this.questionForm.get('topics');
  }

  get attachmentType() {
    return this.questionForm.get('attachmentType');
  }

}
