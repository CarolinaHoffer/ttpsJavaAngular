import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NavbarToggleService } from 'src/app/services/navbar-service/navbar-toggle.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  userLog=true;
  ngOnInit(): void {
  }


  constructor(private navbarService: NavbarToggleService) { }

  closeNav(){
    this.navbarService.close();
  }
  // @Output() openNav = new EventEmitter();
  // openSideNav(e:any) {
  //   this.openNav.emit(e);
  // }
}
