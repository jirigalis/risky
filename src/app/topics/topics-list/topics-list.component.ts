import { Component, OnInit } from '@angular/core';

import { TOPICS } from './topics';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-topics-list',
  templateUrl: './topics-list.component.html',
  styleUrls: ['./topics-list.component.scss']
})
export class TopicsListComponent implements OnInit {

  constructor(private http: HttpClient) { }

  results: string[];

  topics = TOPICS;

  ngOnInit():void {
    this.http.get('/api/topics').subscribe(data => {
      this.results = data['results'];
      console.log(this.results);
    },
    err => {
      console.log('An error occured.', err);
    }
  );
  }

}
