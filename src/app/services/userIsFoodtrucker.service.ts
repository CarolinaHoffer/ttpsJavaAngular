import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './authentication.service';

@Injectable()
export class UserIsFoodtrucker implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate() {
    if (!this.authService.isFoodtrucker()) {
      this.router.navigate(['/homepage']);
      return false;
    }
    return true;
  }
}