import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-foodtruckmanagement',
  templateUrl: './foodtruckmanagement.component.html',
  styleUrls: ['./foodtruckmanagement.component.css']
})
export class FoodtruckmanagementComponent implements OnInit {
  displayedColumns: string[] = ['foodtruck', 'descripcion', 'provincia', 'ciudad', 'promedio', 'editar', 'eliminar'];
  error: any;
  foodtrucks: any;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.userService.misFoodtrucks().subscribe(
      (success) => this.foodtrucks = success,
      (error) => (this.error = error)
    );
  }

}
