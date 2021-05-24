import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { UserService } from './user.service';

@Injectable()
export class UserIsFoodtrucker implements CanActivate {
  constructor(private userService: UserService, private router: Router) {}

  canActivate() {
    if (!this.userService.isFoodtrucker()) {
      this.router.navigate(['/homepage']);
      return false;
    }
    return true;
  }
}
