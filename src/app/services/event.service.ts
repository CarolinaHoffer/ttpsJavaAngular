import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';

import { tap, shareReplay, map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { AuthService } from './authentication.service';
import { UserService } from './user.service';

@Injectable()
export class EventService {
  url: String = environment.url;

  constructor(
    private http: HttpClient,
    private router: Router,
    private authService: AuthService,
    private userService: UserService
  ) {}

  newEvent(
    diaInicio: string,
    diaFin: string,
    horaInicio: string,
    horaFin: string,
    direccion: Object,
    evento: Object
  ) {
    let urlRequest = this.url
      .concat('usuarios/')
      .concat(this.userService.getCurrentUserId())
      .concat('/eventos');
    return this.http
      .post(
        urlRequest,
        { diaInicio, diaFin, horaInicio, horaFin, direccion, evento },
        { withCredentials: true }
      )
      .pipe(
        tap((response) => {
          return response;
        })
      );
  }

  getEvent(id: any) {
    let urlRequest = this.url.concat('eventos/').concat(id);
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

  getReservas(id: any) {
    let busqueda = `eventos/${id}/reservas`
    let urlRequest = this.url.concat(busqueda);
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

  eventosDeUsuarioSinReservaDeFoodtruck(
    idUsuario:string,
    idFoodtruck:string,
  ){
  let busqueda = `usuarios/${idUsuario}/eventosSinReservaDeFoodtruck?foodtruck=${idFoodtruck}`
  return this.http
    .get(this.url.concat(busqueda), { withCredentials: true })
    .pipe(
      tap(
        (response) => console.log(response),
        shareReplay()
      )
    );
}
}
