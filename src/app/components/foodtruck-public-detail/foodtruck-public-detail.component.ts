import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodtruckService } from '../../services/foodtruck.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogCrearReservaComponent } from './dialog-crear-reserva/dialog-crear-reserva.component';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-foodtruck-public-detail',
  templateUrl: './foodtruck-public-detail.component.html',
  styleUrls: ['./foodtruck-public-detail.component.css']
})
export class FoodtruckPublicDetailComponent implements OnInit {
  id: any;
  sub: any;
  foodtruck: any;
  reservable: boolean = false;
  userLogueado: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private foodtruckService: FoodtruckService,
    private userService: UserService,
    public dialog: MatDialog)
    {
      this.userLogueado = this.userService.getCurrentUserId()
    }

  reservableFoodtruck(){
    return this.userLogueado!=this.foodtruck.duenio.id;
  }
  
  ngOnInit(): void {
    this.sub = this.route.params.subscribe((params) => {
      this.id = +params['id'];
    });
    this.foodtruckService.getFoodtruck(this.id).subscribe(
      (success) => {this.foodtruck = success; this.reservable = this.reservableFoodtruck();},
      (error) => this.router.navigate(['homepage'])
    );
  }

  openDialogCrearReserva() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      id: this.id,
      nombre: this.foodtruck.nombre
    };

    const dialogRef = this.dialog.open(
      DialogCrearReservaComponent,
      dialogConfig
    );

    dialogRef.afterClosed().subscribe((message) => {if(message!=="")alert(message)});

  }
}
