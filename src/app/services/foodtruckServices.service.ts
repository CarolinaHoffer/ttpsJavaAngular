import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CanActivate, Router } from '@angular/router';

import { Observable } from 'rxjs';
import { tap, shareReplay } from 'rxjs/operators';

import { environment } from '../../environments/environment';

@Injectable()
export class FoodtruckServicesService {
  url: String = environment.url;

  constructor(private http: HttpClient) {}

  getServicios() {
    return this.http
      .get(this.url.concat('servicios/'), {
        withCredentials: true,
      })
      .pipe(
        tap((response) => {
          return response;
        })
      );
  }
}
