import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';

import { tap, shareReplay, map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { AuthService } from './authentication.service';

@Injectable({
  providedIn: 'root',
})
export class FoodtruckService {
  url: String = environment.url;

  constructor(
    private http: HttpClient,
    private router: Router,
    private authService: AuthService
  ) {}

  rankeados() {
    return this.http
      .get(this.url.concat('foodtrucks/rankeados'), { withCredentials: true })
      .pipe(
        tap(
          (response) => console.log('se generaron los foodtrucks rankeados'),
          shareReplay()
        )
      );
  }

  getFoodtruck(id: string) {
    let urlRequest = this.url.concat('foodtrucks/').concat(id);
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

  eliminarFoodtruck(id: string) {
    let urlRequest = this.url.concat('foodtrucks/').concat(id);
    return this.http
      .delete<any>(urlRequest, { withCredentials: true })
      .pipe(
        map((credentials) => {
          //cambia de token si deja de ser foodtrucker
          if (credentials && credentials.token) {
            this.authService.setSession(credentials);
          }
          return credentials;
        })
      );
  }

  editarFoodtruck(
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
    let urlRequest = this.url.concat('foodtrucks/').concat(id);
    return this.http.put(
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
    );
  }
}
