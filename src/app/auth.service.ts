import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API, KEY } from './constants';
import { AuthCredentials } from './services/model/auth-credentials.model';
import { AuthToken } from './services/model/auth-token.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  login(authCredentials: AuthCredentials): Observable<AuthToken> {
    return this.http.post<AuthToken>(API.auth, authCredentials);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem(KEY.authTokenId);
  }

  logout(): void {
    localStorage.removeItem(KEY.authTokenId);
  }
}
