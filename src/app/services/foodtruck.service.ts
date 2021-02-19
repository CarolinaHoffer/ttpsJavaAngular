import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';

import { tap, shareReplay } from 'rxjs/operators';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FoodtruckService {
  url: String = environment.url;

  constructor(private http: HttpClient, private router: Router) {}

  rankeados() {
    return this.http
      .get(this.url.concat('foodtrucks/rankeados'), { withCredentials: true })
      .pipe(tap((response) => console.log('se genero bien'), shareReplay()));
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
