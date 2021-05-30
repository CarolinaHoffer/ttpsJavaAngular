import { NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FoodtruckService } from '../../services/foodtruck.service';
import { ListaFoodtruckComponent } from '../lista-foodtruck/lista-foodtruck.component'

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  error: any = '';
  foodtrucks: any;
  constructor(private foodtruckService: FoodtruckService, private router: Router) { }

  ngOnInit(): void {
    this.foodtruckService.rankeados().subscribe(
      (success) => this.foodtrucks = success,
      (error) => (this.error = error)
    );
  }

  
}
