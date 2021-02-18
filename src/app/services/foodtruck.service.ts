import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';

import { tap, shareReplay } from 'rxjs/operators';

import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class FoodtruckService {
  url: String = environment.url;

  constructor(private http: HttpClient, private router: Router) {}

  rankeados() {
    return this.http
      .get(
        this.url.concat('foodtrucks/rankeados'),
        { withCredentials: true }
      )
      .pipe(tap((response) => console.log('se genero bien'), shareReplay()));
  }
}
