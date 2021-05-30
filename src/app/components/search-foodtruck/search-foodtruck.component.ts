import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FoodtruckServicesService } from '../../services/foodtruckServices.service';
import { SearchService } from '../../services/search.service'
@Component({
  selector: 'app-search-foodtruck',
  templateUrl: './search-foodtruck.component.html',
  styleUrls: ['./search-foodtruck.component.css']
})
export class SearchFoodtruckComponent implements OnInit {
  servicios: any;
  error: any = '';
  provincias = [
    'Buenos Aires',
    'Catamarca',
    'Chaco',
    'Chubut',
    'Córdoba',
    'Corrientes',
    'Entre Ríos',
    'Formosa',
    'Jujuy',
    'La Pampa',
    'La Rioja',
    'Mendoza',
    'Misiones',
    'Neuquén',
    'Río Nego',
    'Salta',
    'San Juan',
    'San Luis',
    'Santa Cruz',
    'Santa Fe',
    'Santiago del Estero',
    'Tierra del Fuego',
    'Tucumán',
  ];
  foodtrucksResultado: any;

  constructor(
    private router: Router,
    private foodtruckServices: FoodtruckServicesService,
    private searchService: SearchService
    ) { }

  ngOnInit(){
    this.foodtruckServices
      .getServicios()
      .subscribe((success) => (this.servicios = success));
  }

  buscar(
    provincia: string,
    ciudad: string,
    servicio: string,
    nombre: string
  ){
    if(!ciudad){ciudad="null"};
    if(!nombre){nombre="null"};
    this.searchService.buscarPorParametros(
      provincia,
      ciudad,
      servicio,
      nombre
    )
    .subscribe(
      (success) => {
        this.foodtrucksResultado = success;
      },
      (error) => (this.error = error)
    );
  }

  stars(promedioTotal: number){
    let promedioRange = Math.floor(promedioTotal);
    let arrayStars = new Array();
    for (var i = 0; i < promedioRange; i++) {
      arrayStars.push("star");
    }
    if(promedioTotal-promedioRange >= 0.5){
      arrayStars.push('star_half');
    }
    if( arrayStars.length != 5){
      for (var i = arrayStars.length+1; i < 6; i++) {
        arrayStars.push('star_border')
      }
    }
    return arrayStars;
  }
}
