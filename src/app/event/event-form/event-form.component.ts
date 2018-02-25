import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as _ from 'lodash';
import * as moment from 'moment';
import { NotificationsService } from 'angular2-notifications';

import { Event } from '../event';
import { EventService } from '../event.service';
import { CompetitorService } from '../../competitor/competitor.service';
import { Topic } from '../../topics/topic';
import { TopicsService } from '../../topics/topics.service';
import { Question } from '../../question/question';

@Component({
  selector: 'event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.scss']
})
export class EventFormComponent implements OnInit {

	@Input() event: Event;
	@Input() submitFunction;
	eventForm: FormGroup;
	allTopics: Topic[];
	allQuestions: Question[];

	constructor(
		private EventService: EventService,
		private CompetitorService: CompetitorService,
		private TopicsService: TopicsService,
		private fb: FormBuilder,
		private route: ActivatedRoute,
		private router: Router,
		private notify: NotificationsService
	) {
		this.createForm()
	}

	ngOnInit() {
		const id = +this.route.snapshot.paramMap.get('id');

		this.TopicsService.getTopics()
			.subscribe(topics => {
				this.allTopics = topics
			})

		
	}

	ngOnChanges(changes: SimpleChanges) {
		if (typeof changes.event.currentValue !== 'undefined') {
			this.eventForm.reset({
				competitors: this.event.competitors,
				topics: this.event.topics
			})
		}
	}

	createForm() {
		this.eventForm = this.fb.group({
			competitors: new FormControl([], Validators.required),
			topics: new FormControl([], Validators.required)
		});
	}

	submitEventForm() {    
		if (this.eventForm.valid || true) {
			//this.submitFunction(this.eventForm.value)
			this.submitFunction({author: 1	, competitors: [1, 3] })
			.subscribe(res => {
				if (res) {
					this.notify.success('Success', 'The event was saved.');
					this.router.navigate(['events']);
				} else {
					this.notify.error('Something is wrong!', 'There was an error during saving event.');
				}
			})

		} else {
			//this.notify.error('Something is wrong!', 'The form is not valid. Check all values.');
		}
	}

}
