import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarChangeService } from 'src/app/services/navbar-change.service';
import { UserService } from 'src/app/services/user.service';
import { AuthService } from '../../../services/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  foodtrucker: boolean = false;

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private router: Router,
    public navChangeServ: NavbarChangeService
  ) {}

  ngOnInit() {
    this.foodtrucker = this.userService.isFoodtrucker();
  }

  logout() {
    this.authService
      .logout()
      .subscribe((success) => this.router.navigate(['/login']));
  }
}
