import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, shareReplay, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  url: String = environment.url;
  constructor(private http: HttpClient) { }

  buscarPorParametros(
      provincia: string,
      ciudad: string,
      servicio: string,
      nombre: string
    ){
    let busqueda = `foodtrucks/buscar?provincia=${provincia}&servicio=${servicio}&nombre=${nombre}&ciudad=${ciudad}`
    console.log(busqueda)
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
