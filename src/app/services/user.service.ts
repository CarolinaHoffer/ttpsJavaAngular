import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';

import { tap, shareReplay } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { AuthService } from './authentication.service';

@Injectable()
export class UserService {
  url: String = environment.url;

  constructor(private http: HttpClient, private router: Router, private authService: AuthService) {}

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

  getUsuario(id: string) {
    let urlRequest = this.url.concat('usuarios/').concat(id);
    return this.http
      .get(urlRequest, {
        withCredentials: true,
      })
      .pipe(
        tap((response) => {
          return response;
        })
      );
  }

  editarUsuario(
    id: string,
    nombre: string,
    apellido: string,
    email: string,
    contrasenia: string,
    telefono: string,
    foodtrucker: boolean
  ) {
    let urlRequest = this.url.concat('usuarios/').concat(id);
    return this.http
      .put(
        urlRequest,
        { nombre, apellido, email, contrasenia, telefono, foodtrucker },
        { withCredentials: true }
      )
      .pipe(
        tap((response) => {
          return response;
        })
      );
  }

  misFoodtrucks() {
    let idUser;
    idUser = this.authService.getCurrentUserId();
    return this.http
      .get(
        this.url.concat('usuarios/').concat(idUser).concat('/foodtrucks'),
        { withCredentials: true }
      )
      .pipe(tap((response) => console.log('se encontraron los foodtrucks'), shareReplay()));
  }
}
