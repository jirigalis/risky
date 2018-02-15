import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Event } from './event';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};


@Injectable()
export class EventService {

	constructor(private http: HttpClient) { }

	private eventsUrl = 'api/events';

	getAll() {
		return this.http.get<Event[]>(this.eventsUrl)
			.pipe(
                catchError(this.handleError('getTopics', []))
                );
	}

	private handleError<T> (operation = 'operation', result?: T) {
	    return (error: any): Observable<T> => {
	        console.error(error);
	        
	        return of(result as T);
	    }
	}
}
