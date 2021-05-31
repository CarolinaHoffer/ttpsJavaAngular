import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { tap, shareReplay } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { UserService } from './user.service';

@Injectable()
export class EventService {
  url: String = environment.url;

  constructor(private http: HttpClient, private userService: UserService) {}

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
    idUsuario: string,
    idFoodtruck: string
  ) {
    let busqueda = `usuarios/${idUsuario}/eventosSinReservaDeFoodtruck?foodtruck=${idFoodtruck}`;
    return this.http
      .get(this.url.concat(busqueda), { withCredentials: true })
      .pipe(tap((response) => console.log(response), shareReplay()));
  }

  eventosFuturos() {
    let urlRequest = this.url
      .concat('usuarios/')
      .concat(this.userService.getCurrentUserId())
      .concat('/eventosFuturos');
    return this.http.get(urlRequest, { withCredentials: true }).pipe(
      tap((response) => {
        return response;
      })
    );
  }

  eventosPasados() {
    let urlRequest = this.url
      .concat('usuarios/')
      .concat(this.userService.getCurrentUserId())
      .concat('/eventosPasados');
    return this.http.get(urlRequest, { withCredentials: true }).pipe(
      tap((response) => {
        return response;
      })
    );
  }
}
