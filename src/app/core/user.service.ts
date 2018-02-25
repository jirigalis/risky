import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { User } from './User';

@Injectable()
export class UserService {

  private usersUrl = 'api/login';

  constructor(
    private http: HttpClient
  ) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl)
      .pipe(
        catchError(this.handleError('getHeroes', []))
      );
  }

  login(user): Observable<any> {
    return this.http.post<User>(this.usersUrl, user)
      .pipe(
        catchError(this.handleError('login', []))
      );
  }

  logout() {
    localStorage.clear();
  }

  isLoggedIn(): Boolean {
    return localStorage.getItem('user') !== null;
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }


}
