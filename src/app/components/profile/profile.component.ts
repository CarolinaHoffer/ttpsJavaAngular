import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// ---- Services ----
import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/authentication.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  datos: any;
  user: any;
  id: any;
  respuesta: any;
  deshabilitado: boolean = true;
  error: any = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.respuesta = this.authService.getCurrentUser();
    this.user = JSON.parse(this.respuesta);
    this.id = this.user.id.toString();
    this.userService
      .getUsuario(this.id)
      .subscribe((success) => (this.datos = success));
  }

  deshabilitar(bool: boolean) {
    this.deshabilitado = bool;
  }

  editar(nombre: string, apellido: string, email: string, telefono: string) {
    this.userService
      .editarUsuario(
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
