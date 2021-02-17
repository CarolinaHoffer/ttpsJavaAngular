import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  error: any = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  login(username: string, password: string) {
    this.authService.login(username, password).subscribe(
      (success) => console.log('ir al home'), //this.router.navigate(['']),
      (error) => (this.error = error)
    );
  }
}
