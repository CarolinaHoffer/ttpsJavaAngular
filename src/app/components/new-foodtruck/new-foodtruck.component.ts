import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { FoodtruckServicesService } from '../../services/foodtruckServices.service';
import { AuthService } from '../../services/authentication.service';

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
    private router: Router,
    private authService: AuthService,
    private foodtruckServices: FoodtruckServicesService
  ) {}

  ngOnInit() {
    this.respuesta = this.authService.getCurrentUser();
    this.user = JSON.parse(this.respuesta);
    this.id = this.user.id.toString();
    this.foodtruckServices
      .getServicios()
      .subscribe((success) => (this.servicios = success));
  }

  alta(
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
    this.userService
      .agregarFoodtruck(
        this.id,
        nombre,
        descripcion,
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
        (success) => this.router.navigate(['foodtruckmanagement']),
        (error) => (this.error = error)
      );
  }
}
