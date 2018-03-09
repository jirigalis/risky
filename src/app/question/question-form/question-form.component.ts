import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  @Input() submitFunction;
  allTopics: Topic[];
  levels: Level[];
  showLoader = false;

  questionForm: FormGroup;

  constructor(
	private QuestionService: QuestionService,
	private TopicsService: TopicsService,
	private LevelService: LevelService,
	private route: ActivatedRoute,
	private router: Router,
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

	this.onChanges();
  }

  onChanges(): void {
	  this.questionForm.get('attachment').valueChanges.subscribe(val => {
		this.showLoader = true;
		this.question.attachment = val;
		this.showLoader = false;
	  });
	}

  ngOnChanges(changes: SimpleChanges) {
	if (typeof changes.question.currentValue !== "undefined") {
	  this.questionForm.reset({
		text: this.question.text,
		topics: this.question.topics,
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
	  level: new FormControl(1)
	});
  }

  submitQuestionForm() {    
	if (this.questionForm.valid) {
	  this.submitFunction(this.questionForm.value)
		.subscribe(res => {
		  if (res) {
			this.notify.success('Success', 'The question was saved.');
			this.router.navigate(['questions']);
		  } else {
			this.notify.error('Something is wrong!', 'There was an error during saving question.');
		  }
		})
	  
	} else {
	  this.notify.error('Something is wrong!', 'The form is not valid. Check all values.');
	}
  }

  handleFileSelect(evt){
      var files = evt.target.files;
      var file = files[0];
    
    if (files && file) {
        var reader = new FileReader();

        reader.onload =this._handleReaderLoaded.bind(this);
        this.showLoader = true;
        reader.readAsBinaryString(file);
    }
  }
  
  _handleReaderLoaded(readerEvt) {
     var binaryString = readerEvt.target.result;
        const base64str = btoa(binaryString);
        this.showLoader = false;
        this.questionForm.patchValue({attachment: base64str})
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
