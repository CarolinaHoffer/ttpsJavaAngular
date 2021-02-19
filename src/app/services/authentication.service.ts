import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';

import { CanActivate, Router } from '@angular/router';

import { Observable } from 'rxjs';
import { tap, shareReplay } from 'rxjs/operators';

import { environment } from '../../environments/environment';

@Injectable()
export class AuthService {
  url: String = environment.url;

  constructor(private http: HttpClient) {}

  setSession(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  getCurrentUser() {
    return localStorage.getItem('user');
  }

  getCurrentUserId() {
    var respuesta = this.getCurrentUser()
    var user = JSON.parse(respuesta || '{}');
    respuesta = user.id.toString();
    return respuesta || "#";
  }
  
  isLogged() {
    return localStorage.getItem('user') != null;
  }

  login(email: string, contrasenia: string) {
    return this.http
      .post(
        this.url.concat('autenticacion'),
        { email, contrasenia },
        { withCredentials: true }
      )
      .pipe(
        tap((response) => this.setSession(response)),
        shareReplay()
      );
  }

  logout() {
    return this.http
      .post(this.url.concat('logout'), {}, { withCredentials: true })
      .pipe(
        tap((response) => {
          localStorage.removeItem('user');
        }),
        shareReplay()
      );
  }
}
