import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'subnav',
  templateUrl: './subnav.component.html',
  styleUrls: ['./subnav.component.scss']
})
export class SubnavComponent implements OnInit {

  @Input() items;

  constructor() { }

  ngOnInit() {
  	console.log(this.items);
  }

}
