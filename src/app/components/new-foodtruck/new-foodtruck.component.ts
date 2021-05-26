import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { FoodtruckServicesService } from '../../services/foodtruckServices.service';
import { AuthService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-new-foodtruck',
  templateUrl: './new-foodtruck.component.html',
  styleUrls: ['./new-foodtruck.component.css'],
})
export class NewFoodtruckComponent implements OnInit {
  servicios: any;
  id: any;
  user: any;
  respuesta: any;
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

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private router: Router,
    private foodtruckServices: FoodtruckServicesService
  ) {}

  ngOnInit() {
    this.id = this.userService.getCurrentUserId();
    this.foodtruckServices
      .getServicios()
      .subscribe((success) => (this.servicios = success));
  }

  alta(
    nombre: string,
    descripcion: string,
    servicio: string,
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
    this.userService
      .newFoodtruck(
        this.id,
        nombre,
        descripcion,
        servicio,
        web,
        number,
        instagram,
        twitter,
        provincia,
        ciudad,
        0,
        0,
        0
      )
      .subscribe(
        (success) => {
          this.router.navigate(['homepage']);
        },
        (error) => (this.error = error)
      );
  }
}
