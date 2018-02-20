import { Component, OnInit } from '@angular/core';

import { Competitor } from '../competitor';
import { CompetitorService } from '../competitor.service';

@Component({
  selector: 'competitor-new',
  templateUrl: './competitor-new.component.html',
  styleUrls: ['./competitor-new.component.scss']
})
export class CompetitorNewComponent implements OnInit {
	subnavItems = [
		{
			title: "Back",
			icon: "chevron-circle-left",
			routerLink: "/competitors"
		}
	]

  constructor(private CompetitorService: CompetitorService) { }

  ngOnInit() {
  }

  submitForm(competitor: Competitor) {
  	if (competitor !== null) {
  		return this.CompetitorService.create(competitor)
  	}
  	return false;
  }

}
