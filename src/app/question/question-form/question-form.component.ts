import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as _ from 'lodash';

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
  topics: Topic[];
  levels: Level[];
  selectedTopicsCount = 1;

  questionForm: FormGroup;

  constructor(
    private QuestionService: QuestionService,
    private TopicsService: TopicsService,
    private LevelService: LevelService,
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

    this.LevelService.getLevels()
      .subscribe(levels => this.levels = levels);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (typeof changes.question.currentValue !== "undefined") {
      this.questionForm.reset({
        text: this.question.text,
        qtopics: this.question.topics,
        attachmentType: 'file',
        level: this.question.level
      });
    }
  }

  createForm() {
    this.questionForm = this.fb.group({
      text: new FormControl('', Validators.required),
      qtopics: new FormControl([], Validators.required),
      attachment: '',
      attachmentType: new FormControl(''),
      level: new FormControl('')
    });
  }

  submitQuestionForm() {
    if (this.questionForm.valid) {
      this.question = this.questionForm.value;
      //QuestionService.update()
    }
    console.log(this.questionForm.value);
    console.log(this.question);
  }

  get text() {
    return this.questionForm.get('text');
  }

  get qtopics() {
    return this.questionForm.get('qtopics');
  }

  get attachmentType() {
    return this.questionForm.get('attachmentType');
  }

}
