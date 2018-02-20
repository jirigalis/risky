import { Component, OnInit } from '@angular/core';

import { Competitor } from '../competitor';
import { CompetitorService } from '../competitor.service';

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

  constructor( private Competitor: CompetitorService ) { }

  ngOnInit() {
  	this.Competitor.getCompetitors()
  		.subscribe(competitors => this.competitors = competitors)
  }

}
