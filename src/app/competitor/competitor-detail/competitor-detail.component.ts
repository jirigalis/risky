import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Competitor } from '../competitor';
import { CompetitorService } from '../competitor.service';

@Component({
  selector: 'app-competitor-detail',
  templateUrl: './competitor-detail.component.html',
  styleUrls: ['./competitor-detail.component.scss']
})
export class CompetitorDetailComponent implements OnInit {

  competitor: Competitor = undefined;
  subnavItems = [
    {
      title: "Back",
      icon: "chevron-circle-left",
      routerLink: "/competitors"
    }
  ]

  constructor(
  		private CompetitorService: CompetitorService,
  		private route: ActivatedRoute
  	) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.CompetitorService.getCompetitor(id)
      .subscribe(competitor => {
        this.competitor = competitor;
      });
  }

  submitForm(competitor: Competitor) {
    if (competitor !== null ) {
      competitor.id = this.competitor.id;
      return this.CompetitorService.update(competitor)
    }
  }
}
