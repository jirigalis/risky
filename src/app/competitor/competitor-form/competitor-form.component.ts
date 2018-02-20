import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as _ from 'lodash';
import { NotificationsService } from 'angular2-notifications';

import { Competitor } from '../competitor';
import { CompetitorService } from '../competitor.service';

@Component({
	selector: 'competitor-form',
	templateUrl: './competitor-form.component.html',
	styleUrls: ['./competitor-form.component.scss']
})
export class CompetitorFormComponent implements OnInit {

	@Input() competitor: Competitor;
	@Input() submitFunction;
	competitorForm: FormGroup;

	constructor(
		private CompetitorService: CompetitorService,
		private fb: FormBuilder,
		private route: ActivatedRoute,
		private router: Router,
		private notify: NotificationsService
		) {
		this.createForm();
	}

	ngOnInit() {
	}

	ngOnChanges(changes: SimpleChanges) {
		if (typeof changes.competitor.currentValue !== "undefined") {
			this.competitorForm.reset({
				name: this.competitor.name,
				note: this.competitor.note
			});
		}
	}

	createForm() {
		this.competitorForm = this.fb.group({
			name: new FormControl('', Validators.required),
			note: new FormControl('')
		})
	}

	submitCompetitorForm() {
		if (this.competitorForm.valid) {
			this.submitFunction(this.competitorForm.value)
				.subscribe(res => {
					if (res) {
						this.notify.success('Success', 'The competitor was saved.');
						this.router.navigate(['competitors']);
					} else {
						this.notify.error('Something is wrong!', 'There was an error during saving competitor.');
					}
				})
		} else {
			this.notify.error('Something is wrong!', 'The form is not valid. Check all values.')
		}
	}

	get name() {
		return this.competitorForm.get('name')
	}

	get note() {
		return this.competitorForm.get('note')
	}

}
