import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';

import { tap } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { UserService } from './user.service';

@Injectable()
export class ReservaService {
  url: String = environment.url;

  constructor(private http: HttpClient, private userService: UserService) {}

  pedidosPendientes() {
    let urlRequest = this.url
      .concat('usuarios/')
      .concat(this.userService.getCurrentUserId())
      .concat('/pedidospendientes');
    return this.http.get(urlRequest, { withCredentials: true }).pipe(
      tap((response) => {
        return response;
      })
    );
  }

  pedidosAceptados() {
    let urlRequest = this.url
      .concat('usuarios/')
      .concat(this.userService.getCurrentUserId())
      .concat('/pedidosaceptados');
    return this.http.get(urlRequest, { withCredentials: true }).pipe(
      tap((response) => {
        return response;
      })
    );
  }

  aceptarReserva(idReserva: string) {
    let urlRequest = this.url
      .concat('reservas/')
      .concat(idReserva)
      .concat('/?estado=aceptada');
    return this.http.get(urlRequest, { withCredentials: true }).pipe(
      tap((response) => {
        return response;
      })
    );
  }

  rechazarReserva(idReserva: string) {
    let urlRequest = this.url
      .concat('reservas/')
      .concat(idReserva)
      .concat('/?estado=rechazada');
    return this.http.get(urlRequest, { withCredentials: true }).pipe(
      tap((response) => {
        return response;
      })
    );
  }

  terminarReserva(idReserva: string) {
    let urlRequest = this.url
      .concat('reservas/')
      .concat(idReserva)
      .concat('/?estado=esperandopuntaje');
    return this.http.get(urlRequest, { withCredentials: true }).pipe(
      tap((response) => {
        return response;
      })
    );
  }
}
