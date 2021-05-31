import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, shareReplay } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root',
})
export class ReservaService {
  url: String = environment.url;

  constructor(private http: HttpClient, private userService: UserService) {}

  reservar(idFoodtruck: string, idEvento: string) {
    let busqueda = `reservas/nueva?evento=${idEvento}&foodtruck=${idFoodtruck}`;
    return this.http
      .post(this.url.concat(busqueda), { withCredentials: true })
      .pipe(
        tap((response) => console.log('se genero bien')),
        shareReplay()
      );
  }

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

  puntuar(idReserva: any,limpieza: any, sabor: any, simpatia: any, calidadPrecio: any, disenio: any) {
    let busqueda = `reservas/${idReserva}/puntaje`;
    return this.http
      .post(
        this.url.concat(busqueda),
        { limpieza, simpatia, calidadPrecio, sabor, disenio },
        { withCredentials: true }
      )
      .pipe(
        tap((response) => console.log('se genero bien')),
        shareReplay()
      );
  }
}
