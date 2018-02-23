import { Component, OnInit } from '@angular/core';

import { Event } from '../event';
import { EventService } from '../event.service';

@Component({
  selector: 'event-new',
  templateUrl: './event-new.component.html',
  styleUrls: ['./event-new.component.scss']
})
export class EventNewComponent implements OnInit {

  subnavItems = [
    {
      title: "Back",
      icon: "chevron-circle-left",
      routerLink: "/events"
    }
  ]

  constructor( private EventService: EventService) { }

  ngOnInit() {
  }

  submitForm(event: Event) {
  	if (event !== null ) {
  		return this.EventService.create(event)
  	}
  	return false;
  }

}
