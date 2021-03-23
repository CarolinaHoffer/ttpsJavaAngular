import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { AuthService } from '../../services/authentication.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogDeleteFoodtruckComponent } from './dialog-delete-foodtruck/dialog-delete-foodtruck.component';
import { NavbarChangeService } from 'src/app/services/navbar-change.service';
import { DialogIsNotFoodtruckerComponent } from './dialog-is-not-foodtrucker/dialog-is-not-foodtrucker.component';

@Component({
  selector: 'app-foodtruckmanagement',
  templateUrl: './foodtruckmanagement.component.html',
  styleUrls: ['./foodtruckmanagement.component.css'],
})
export class FoodtruckmanagementComponent implements OnInit {
  displayedColumns: string[] = [
    'foodtruck',
    'descripcion',
    'provincia',
    'ciudad',
    'promedio',
    'editar',
    'eliminar',
  ];
  error: any;
  foodtrucks: any;
  user: any;
  rta: any;
  
  constructor(
    private authService: AuthService,
    private userService: UserService,
    private navbarChangeService: NavbarChangeService,
    private router: Router,
    public dialog: MatDialog,
  ) {}

  openDialogDelete(nombreFoodtruck: string, idFoodtruck: string, cantidadFoodtrucksActuales: number) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      id: idFoodtruck,
      nombre: nombreFoodtruck,
      cantidadFoodtrucks: cantidadFoodtrucksActuales
    };

    const dialogRef = this.dialog.open(
      DialogDeleteFoodtruckComponent,
      dialogConfig
    );

    dialogRef.afterClosed().subscribe((data) => {
      if(data) {
        this.foodtrucks = this.foodtrucks.filter((f: any) => f.id != data);
        this.getFoodtrucks();
      }
    });
  }
  ngOnInit(): void {
    this.getFoodtrucks();
  }

  getFoodtrucks() {
    this.userService.misFoodtrucks().subscribe(
      (success) => (this.foodtrucks = success),
      (error) => (this.error = error, this.isNotFoodtruck())
    );
  }

  openDialogIsNotFoodtrucker() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {};

    const dialogRef = this.dialog.open(
      DialogIsNotFoodtruckerComponent,
      dialogConfig
    );

    dialogRef.afterClosed().subscribe((data) => {
      this.navbarChangeService.foodtrucker = false;
      this.router.navigate(['homepage']);
    });

  }

  
  isNotFoodtruck() {
    this.rta = this.authService.getCurrentUser();
    this.user = JSON.parse(this.rta);
    this.user.foodtrucker = false;
    this.authService.setSession(this.user);
    this.openDialogIsNotFoodtrucker()
  }
}
