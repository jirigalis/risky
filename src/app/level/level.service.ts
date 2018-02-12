import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Level } from './level';

@Injectable()
export class LevelService {
	private url = 'api/levels';

    constructor(
        private http: HttpClient
    ) { }

    getLevels(): Observable<Level[]> {
        return this.http.get<Level[]>(this.url)
            .pipe(
                catchError(this.handleError('getLevels', []))
            )
    }

    getQuestion(id: number): Observable<Level> {
        const url = `${this.url}/${id}`;
        return this.http.get<Level>(url)
            .pipe(
                catchError(this.handleError<Level>(`getLevel id=${id}`))
            )

    }

    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
          console.error(error);
          return of(result as T);
        }
      }

}
