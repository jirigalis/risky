import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as _ from 'lodash';
import { NotificationsService } from 'angular2-notifications';

import { Topic } from '../topic';
import { TopicsService } from '../topics.service';

@Component({
	selector: 'topic-form',
	templateUrl: './topic-form.component.html',
	styleUrls: ['./topic-form.component.scss']
})
export class TopicFormComponent implements OnInit, OnChanges {

	@Input() topic: Topic;
	@Input() submitFunction;

	topicForm: FormGroup;

	constructor(
		private TopicsService: TopicsService,
		private fb: FormBuilder,
		private notify: NotificationsService,
		private router: Router  
	) {
		this.createForm();
	}

	ngOnInit() {
	}

	ngOnChanges(changes: SimpleChanges) {
		if (typeof changes.topic.currentValue !== "undefined") {
			this.topicForm.reset({
				name: this.topic.name,
				description: this.topic.description,
			});
		}
	}

	createForm() {
		this.topicForm = this.fb.group({
			name: new FormControl('', Validators.required),
			description: new FormControl(''),
		});
	}

	submitTopicForm() {
		if (this.topicForm.valid) {
		  	this.submitFunction(this.topicForm.value)
				.subscribe(res => {
			  		if (res) {
						this.notify.success('Success', 'The topic was saved.');
            			this.router.navigate(['topics']);
			  		} else {
						this.notify.error('Something is wrong!', 'There was an error during saving topic.');
			  		}
			})
		  
		} else {
			this.notify.error('Something is wrong!', 'The form is not valid. Check all values.');
		}
	}

	get name() {
		return this.topicForm.get('name');
	}

	get description() {
		return this.topicForm.get('description');
	}

}
