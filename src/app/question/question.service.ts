import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Question } from './question';

@Injectable()
export class QuestionService {
    private url = 'api/questions';

    constructor(
        private http: HttpClient
    ) { }

    getQuestions(): Observable<Question[]> {
        return this.http.get<Question[]>(this.url)
            .pipe(
                catchError(this.handleError('getQuestions', []))
            )
    }

    getQuestion(id: number): Observable<Question> {
        const url = `${this.url}/${id}`;
        return this.http.get<Question>(url)
            .pipe(
                catchError(this.handleError<Question>(`getQuestion id=${id}`))
            )

    }

    update(question: Question): Observable<Question> {
        const url = `${this.url}/${question.id}`;
        return this.http.put<Question>(url, question)
            .pipe(
                catchError(this.handleError<Question>(`update id=${question.id}`))
            )

    }

    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
          console.error(error);
          return of(result as T);
        }
      }
}