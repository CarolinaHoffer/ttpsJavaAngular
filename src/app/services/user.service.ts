import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';

import { tap, shareReplay } from 'rxjs/operators';

import { environment } from '../../environments/environment';

@Injectable()
export class UserService {
  url: String = environment.url;

  constructor(private http: HttpClient, private router: Router) {}

  register(
    nombre: string,
    apellido: string,
    email: string,
    contrasenia: string,
    telefono: any = null
  ) {
    return this.http
      .post(
        this.url.concat('usuarios'),
        { nombre, apellido, contrasenia, email, telefono },
        { withCredentials: true }
      )
      .pipe(tap((response) => console.log('se genero bien'), shareReplay()));
  }

  logout() {
    return this.http
      .post(this.url.concat('logout'), {})
      .subscribe((success) => localStorage.removeItem('user'));
  }
}
