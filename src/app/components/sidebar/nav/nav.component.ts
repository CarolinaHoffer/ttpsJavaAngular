import { Component, OnInit, SkipSelf, ViewChild } from '@angular/core';
import { NavbarToggleService } from 'src/app/services/navbar-service/navbar-toggle.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  @ViewChild('drawer') drawerNav:any;
  public toggleNav:any;
  openNav: any;
  
  chequearRuta(){
    return !['/nuevo_foodtruck','/'].includes(window.location.pathname)
  }
  constructor(private navbarService: NavbarToggleService) {
    this.openNav = this.chequearRuta();
  }

  obtenerValidacion(){
    console.log(this.openNav)
    return this.openNav;
  }
  ngAfterViewInit():any {  
    this.navbarService.setSidenav(this.drawerNav);
    this.toggleNav= ()=>{
        this.drawerNav.toggle();
    }
  }



  // tamanioNavRuta() {
  //     switch (window.location.pathname) {
  //       case '/nuevo_foodtruck':
  //         return {background: 'rgb(255, 255, 255)',width: '0%'};
  //       default:
  //         return{background: 'rgb(130, 208, 211)', width: '18%'};
  //     }
  // }

  // tamanioContRuta(){
  //     switch (window.location.pathname) {
  //       case '/nuevo_foodtruck':
  //         return {width:'100vw', float:'right'};
  //       default:
  //         return {width:'82vw', float:'right'};
  //     }
  // }
  
  ngOnInit(): void {}
}