import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AuthTokenInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // req is immutable
    console.log('A request is being intercepted', req.url);

    if (!sessionStorage.getItem('auth-token')) {
      return next.handle(req);
    }

    // example for adding a new HTTP request header like Authorization
    const h1 = new HttpHeaders({ 'Authorization': 'JWT ' + sessionStorage.getItem('auth-token') });
    const modifiedReq = req.clone({ headers: h1, body: { authorName: 'Vinod', ...req.body } });
    return next.handle(modifiedReq);
  }
}
