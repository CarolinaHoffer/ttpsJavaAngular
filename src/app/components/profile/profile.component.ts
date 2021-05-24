import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// ---- Services ----
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  datos: any;
  id: any;
  deshabilitado: boolean = true;
  error: any = '';

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit() {
    this.id = this.userService.getCurrentUserId();
    this.userService
      .getUser(this.id)
      .subscribe((success) => (this.datos = success));
  }

  deshabilitar(bool: boolean) {
    this.deshabilitado = bool;
  }

  editar(nombre: string, apellido: string, email: string, telefono: string) {
    this.userService
      .editUser(
        this.id,
        nombre,
        apellido,
        email,
        this.datos.contrasenia,
        telefono,
        this.datos.foodtrucker
      )
      .subscribe(
        (success) => this.router.navigate(['homepage']),
        (error) => (this.error = error)
      );
  }
}
