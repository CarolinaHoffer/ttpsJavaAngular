import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodtruckServicesService } from '../../services/foodtruckServices.service';
import { FoodtruckService } from '../../services/foodtruck.service';

@Component({
  selector: 'app-foodtruck-detail',
  templateUrl: './foodtruck-detail.component.html',
  styleUrls: ['./foodtruck-detail.component.css'],
})
export class FoodtruckDetailComponent implements OnInit {
  id: any;
  sub: any;
  error: any = '';
  servicios: any;
  deshabilitado: boolean = true;
  foodtruck: any;

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

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private foodtruckServicesService: FoodtruckServicesService,
    private foodtruckService: FoodtruckService
  ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe((params) => {
      this.id = +params['id'];
    });
    this.foodtruckServicesService
      .getServicios()
      .subscribe((success) => (this.servicios = success));
    this.foodtruckService.getFoodtruck(this.id).subscribe(
      (success) => (this.foodtruck = success),
      (error) => this.router.navigate(['homepage'])
    );
  }

  deshabilitar(bool: boolean) {
    this.deshabilitado = bool;
  }

  editar(
    nombre: string,
    descripcion: string,
    web: any = null,
    whatsapp: any = null,
    twitter: any = null,
    instagram: any = null,
    provincia: string,
    ciudad: string
  ) {
    let number = whatsapp.replace('\\D+', '');
    if (!number) {
      number = null;
    }
    this.foodtruckService
      .editarFoodtruck(
        this.id.toString(),
        nombre,
        descripcion,
        web,
        whatsapp,
        instagram,
        twitter,
        provincia,
        ciudad,
        this.foodtruck.cantValoraciones,
        this.foodtruck.cantPromediosTotales,
        this.foodtruck.promedioTotal
      )
      .subscribe(
        (success) => this.router.navigate(['foodtruckmanagement']),
        (error) => (this.error = error)
      );
  }
}
