import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';

import { tap } from 'rxjs/operators';

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
}
