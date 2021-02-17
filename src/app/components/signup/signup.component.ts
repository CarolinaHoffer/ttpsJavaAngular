import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  error: any = '';

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {}

  register(
    nombre: string,
    apellido: string,
    email: string,
    contrasenia: string,
    telefono: any = null
  ) {
    this.userService
      .register(nombre, apellido, email, contrasenia, telefono)
      .subscribe(
        (success) => this.router.navigate(['login']),
        (error) => (this.error = error)
      );
  }
}
