import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/observable';

import { UserService } from './core/user.service'; 

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

	intercept (req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		
		let token = localStorage.getItem('token');
		if (token) {
			const authReq = req.clone({
				headers: req.headers.set('x-access-token', token)
			});
			return next.handle(authReq);
		}
		return next.handle(req);
	}
}