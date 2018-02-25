import { Component, OnInit } from '@angular/core';

import { Event } from '../event';
import { EventService } from '../event.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {
	events: Event[];
  subnavItems = [
    {
      title: "Create a new event",
      icon: "plus-circle",
      routerLink: "/events/new"
    }
  ];

  constructor(private EventService: EventService) { }

  ngOnInit() {
    this.EventService.getAll()
      .subscribe(events => this.events = events);
  }

}
