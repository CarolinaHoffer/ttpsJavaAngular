import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';

import { tap, shareReplay, map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { AuthService } from './authentication.service';

@Injectable()
export class UserService {
  url: String = environment.url;

  constructor(
    private http: HttpClient,
    private router: Router,
    private authService: AuthService
  ) {}

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
      .pipe(
        tap((response) => console.log('se genero bien')),
        shareReplay()
      );
  }

  getCurrentUserId() {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user).id : null;
  }

  isFoodtrucker() {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user).foodtrucker : null;
  }

  getUser(id: string) {
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

  editUser(
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

  getFoodtrucks() {
    const user = localStorage.getItem('user');
    const id = user ? JSON.parse(user).id : null;
    return this.http
      .get(this.url.concat('usuarios/').concat(id).concat('/foodtrucks'), {
        withCredentials: true,
      })
      .pipe(
        tap(
          (response) => console.log('se encontraron los foodtrucks'),
          shareReplay()
        )
      );
  }

  newFoodtruck(
    id: string,
    nombre: string,
    descripcion: string,
    urlWeb: any,
    whatsapp: any,
    instagram: any,
    twitter: any,
    provincia: string,
    ciudad: string,
    cantValoraciones: number,
    cantPromediosTotales: number,
    promedioTotal: number
  ) {
    let urlRequest = this.url
      .concat('usuarios/')
      .concat(id)
      .concat('/foodtrucks');
    return this.http
      .post<any>(
        urlRequest,
        {
          nombre,
          descripcion,
          urlWeb,
          whatsapp,
          instagram,
          twitter,
          provincia,
          ciudad,
          cantValoraciones,
          cantPromediosTotales,
          promedioTotal,
        },
        { withCredentials: true }
      )
      .pipe(
        map((credentials) => {
          //cambia de token si pasa a ser foodtrucker
          if (credentials && credentials.token) {
            this.authService.setSession(credentials);
          }
          return credentials;
        })
      );
  }
}
