import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { TOPICS } from './topics';
import { Topic } from './topics';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable()
export class TopicsService {

    constructor(
        private http: HttpClient
    ) { }

    private topicsUrl = 'api/topics';

    getTopics(): Observable<Topic[]> {
        return this.http.get<Topic[]>(this.topicsUrl)
            .pipe(
                catchError(this.handleError('getTopics', []))
            );
    }

    getTopic(id: number): Observable<Topic> {
        const url = `${this.topicsUrl}/${id}`;
        return this.http.get<Topic>(url).pipe(
            catchError(this.handleError<Topic>(`getHero id=${id}`))
        );
    }

    updateTopic (topic: Topic): Observable<any> {
        return this.http.put(this.topicsUrl, topic, httpOptions)
            .pipe(
                catchError(this.handleError<any>('updateTopic'))
            );
    }

    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);
            
            return of(result as T);
        }
    }    
}