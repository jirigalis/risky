import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as _ from 'lodash';
import * as moment from 'moment';
import { NotificationsService } from 'angular2-notifications';

import { Event } from '../event';
import { EventService } from '../event.service';
import { CompetitorService } from '../../competitor/competitor.service';
import { TopicsService } from '../../topics/topics.service';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.scss']
})
export class EventFormComponent implements OnInit {

	@Input() event: Event;
	@Input() submitFunction;
	eventForm: FormGroup;

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
	}

	ngOnChanges(changes: SimpleChanges) {
		if (typeof changes.competitor.currentValue !== 'undefined') {
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

}
