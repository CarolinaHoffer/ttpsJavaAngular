import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/authentication.service';
import { Router } from '@angular/router';
import { NavbarChangeService } from 'src/app/services/navbar-change.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  user: any;
  respuesta: any;

  constructor(private authService: AuthService, private router: Router, public navChangeServ: NavbarChangeService) {}

  ngOnInit() {
    this.respuesta = this.authService.getCurrentUser();
    this.user = JSON.parse(this.respuesta);
    this.navChangeServ.foodtrucker=this.user.foodtrucker;
  }



  logout() {
    this.authService
      .logout()
      .subscribe((success) => this.router.navigate(['/login']));
  }
}
