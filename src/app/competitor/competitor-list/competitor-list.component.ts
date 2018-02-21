import { Component, OnInit } from '@angular/core';
import * as moment from 'moment/moment';

import { Competitor } from '../competitor';
import { CompetitorService } from '../competitor.service';
import { ModalService } from '../../shared/modal/modal.service';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'competitor-list',
  templateUrl: './competitor-list.component.html',
  styleUrls: ['./competitor-list.component.scss']
})
export class CompetitorListComponent implements OnInit {

  competitors: Competitor[];  
  subnavItems = [
    {
      title: "Add new competitor",
      icon: "plus-circle",
      routerLink: "/competitors/new"
    }
  ];

  constructor(
  	private CompetitorService: CompetitorService,
  	private ModalService: ModalService,
  	private notify: NotificationsService
  	) { }

  ngOnInit() {
  	this.fetchCompetitors();
  }

  private fetchCompetitors() {
  	this.CompetitorService.getCompetitors()
  		.subscribe(competitors => this.competitors = competitors)
  }

  formatTimestamp(timestamp) {
  	return moment.unix(timestamp).format('DD. MM. YYYY HH:mm:ss');
  }

  delete(id) {
  	this.ModalService.delete().then(res => {
		if (res) {
			this.CompetitorService.delete(id)
			.subscribe(res => {
				this.notify.success('Success', 'The competitor was successfully deleted.')
				this.fetchCompetitors();
			}, err => {
				console.error(err);
				this.notify.error("An error occured", "Error during deleting a competitor.")
			}
		)
}
  	}).catch()
  }

}
