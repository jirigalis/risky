import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class UserService {

  constructor() { }

  getUsers(): Observable<User[]> {
  	return of([1,2,3])
  }


}
