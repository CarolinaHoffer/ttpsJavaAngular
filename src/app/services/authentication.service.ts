import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { tap, shareReplay, map } from 'rxjs/operators';

import * as jwtDecode from 'jwt-decode';
import * as moment from 'moment';

import { environment } from '../../environments/environment';

@Injectable()
export class AuthService {
  url: String = environment.url;

  constructor(private http: HttpClient) {}

  setSession(authResult: any) {
    const token = authResult.token;
    const payload = <JWTPayload>jwtDecode.default(token);
    const expiresAt = moment.unix(payload.exp);

    localStorage.setItem('token', token);
    localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
    localStorage.setItem(
      'user',
      JSON.stringify({ id: payload.jti, foodtrucker: payload.foodtrucker })
    );
  }

  isLogged() {
    return localStorage.getItem('token') != null;
  }

  login(email: string, contrasenia: string) {
    return this.http
      .post<any>(
        this.url.concat('autenticacion'),
        { email, contrasenia },
        { withCredentials: true }
      )
      .pipe(
        map((credentials) => {
          //login exitoso si hay un token en la rta
          if (credentials && credentials.token) {
            this.setSession(credentials);
          }
          return credentials;
        })
      );
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('expires_at');
    localStorage.removeItem('user');
  }
}

interface JWTPayload {
  jti: string;
  foodtrucker: string;
  exp: number;
}
