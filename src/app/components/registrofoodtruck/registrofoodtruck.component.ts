import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NavbarToggleService } from 'src/app/services/navbar-service/navbar-toggle.service';

@Component({
  selector: 'app-registrofoodtruck',
  templateUrl: './registrofoodtruck.component.html',
  styleUrls: ['./registrofoodtruck.component.css']
})
export class RegistrofoodtruckComponent implements OnInit {

  constructor(private navbarService: NavbarToggleService) {}

  openNav(){
    this.navbarService.open();
  }

  ngOnInit(): void {}  

  // @Output() openNav = new EventEmitter();
  // openSideNav(e:any) {
  //   this.openNav.emit(e);
  // }

}
