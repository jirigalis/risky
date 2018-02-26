import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/do';

import { UserService } from './core/user.service';
import { NotificationsService } from 'angular2-notifications';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

	constructor(
		private notify: NotificationsService,
		private router: Router
		) { }

	intercept (req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
	

		let token = localStorage.getItem('token');
		if (token) {
			const authReq = req.clone({
				headers: req.headers.set('x-access-token', token)
			});
			return next.handle(authReq).do((event: HttpEvent<any>) => {
				if (event instanceof HttpResponse) {
					// do stuff with response if you want
				}
			}, (err: any) => {
				if (err instanceof HttpErrorResponse) {
					if (err.status === 401) {
						this.notify.error('Not authorized', 'Your login has expired.');
						this.router.navigate(['login'])
					}
				}
			});
		}

		return next.handle(req);
	}
}