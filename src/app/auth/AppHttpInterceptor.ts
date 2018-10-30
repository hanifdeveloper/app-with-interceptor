import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpResponse, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {
  constructor() {}

  intercept( request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const idToken = localStorage.getItem('token');
    if (idToken) {
      request = request.clone({
        headers: request.headers.set('Authorization', 'Bearer ' + idToken)
      });
    }
    return next.handle(request);
  }
}
