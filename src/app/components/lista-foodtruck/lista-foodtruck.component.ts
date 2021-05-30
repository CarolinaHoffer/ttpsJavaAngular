import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-foodtruck',
  templateUrl: './lista-foodtruck.component.html',
  styleUrls: ['./lista-foodtruck.component.css'],
  inputs: ['foodtrucks']
})
export class ListaFoodtruckComponent implements OnInit {
  @Input() foodtrucks : any;
  @Input() heightMax : number = 1000;
  constructor() {}

  ngOnInit(): void {

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
