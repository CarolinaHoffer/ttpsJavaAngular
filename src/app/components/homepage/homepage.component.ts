import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FoodtruckService } from '../../services/foodtruck.service';


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

  stars(promedioTotal: number){
    let promedioRange = Math.floor(promedioTotal);
    let arrayStars = new Array();
    for (var i = 0; i < promedioRange; i++) {
      arrayStars.push("star");
    }
    if(promedioTotal-promedioRange >= 0.5){
      arrayStars.push('star_half');
    }
    if( arrayStars.length != 5){
      for (var i = arrayStars.length+1; i < 6; i++) {
        arrayStars.push('star_border')
      }
    }
    return arrayStars;
  }
}
