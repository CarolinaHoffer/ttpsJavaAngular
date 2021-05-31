import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, shareReplay, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {
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
  url: String = environment.url;
  constructor(private http: HttpClient) { }

  reservar(
    idFoodtruck:string,
    idEvento:string,
  ) {
    let busqueda = `reservas/nueva?evento=${idEvento}&foodtruck=${idFoodtruck}`;
    return this.http
      .post(
        this.url.concat(busqueda),
        { withCredentials: true }
      )
      .pipe(
        tap((response) => console.log('se genero bien')),
        shareReplay()
      );
  }

}
