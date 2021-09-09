import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { KEY } from '../constants';
import { AuthService } from '../auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private authService: AuthService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('In Interceptor' + request);
    if (!this.authService.isAuthenticated()) {
      return next.handle(request);
    }
    const token = localStorage.getItem(KEY.authTokenId);
    if (token) {
    const clone = request.clone({
      headers: new HttpHeaders().set(
        'Authorization', token
      )
    });
    return next.handle(clone);
  }
  else {
    return next.handle(request)
  }
  }
}

export const AuthInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  multi: true
}
