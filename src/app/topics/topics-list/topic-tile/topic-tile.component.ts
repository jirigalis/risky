import { Component, OnInit, Input } from '@angular/core';

import { Topic } from '../../topic';

@Component({
  selector: 'topic-tile',
  templateUrl: './topic-tile.component.html',
  styleUrls: ['./topic-tile.component.scss']
})
export class TopicTileComponent implements OnInit {
  @Input() topic: Topic;

  constructor() { }

  ngOnInit() {
  }

}
