import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Competitor } from './competitor';

const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable()
export class CompetitorService {

	constructor( private http: HttpClient ) {  }

	private competitorsUrl = 'api/competitors';

	getCompetitors(): Observable<Competitor[]> {
		return this.http.get<Competitor[]>(this.competitorsUrl)
			.pipe(
				catchError(this.handleError('getTopics', []))
			);
	}

	getCompetitor(id: number): Observable<Competitor> {
		const url = `${this.competitorsUrl}/${id}`;
		return this.http.get<Competitor>(url).pipe(
			catchError(this.handleError<Competitor>(`getCompetitor id=${id}`))
		);
	}

	create(competitor: Competitor) {
		const url = `${this.competitorsUrl}/new`;
		return this.http.post(url, competitor)
			.pipe(
				catchError(this.handleError<Competitor>(`create`))
			)
	}

	update(competitor: Competitor): Observable<Competitor> {
		const url = `${this.competitorsUrl}/${competitor.id}`;
        return this.http.put<Competitor>(url, competitor)
            .pipe(
                catchError(this.handleError<Competitor>(`update id=${competitor.id}`))
            )

	}

	private handleError<T> (operation = 'operation', result?: T) {
		return (error: any): Observable<T> => {
			console.error(error);
			
			return of(result as T);
		}
	} 

}
