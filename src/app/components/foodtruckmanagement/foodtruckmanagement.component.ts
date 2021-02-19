import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { AuthService } from '../../services/authentication.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogDeleteFoodtruckComponent } from './dialog-delete-foodtruck/dialog-delete-foodtruck.component';
import { from } from 'rxjs';

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
    private router: Router,
    public dialog: MatDialog
  ) {}

  openDialog(nombreFoodtruck: string, idFoodtruck: string) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      id: idFoodtruck,
      nombre: nombreFoodtruck,
    };

    const dialogRef = this.dialog.open(
      DialogDeleteFoodtruckComponent,
      dialogConfig
    );

    dialogRef.afterClosed().subscribe((data) => {
      this.getFoodtrucks();
      this.rta = this.authService.getCurrentUser();
      if (this.foodtrucks.length == 1) {
        this.user = this.user = JSON.parse(this.rta);
        this.user.foodtrucker = false;
        this.authService.setSession(this.user);
        this.router.navigate(['homepage']);
      }
      if (data) {
        this.foodtrucks = this.foodtrucks.filter((f: any) => f.id != data);
      }
    });
  }
  ngOnInit(): void {
    this.getFoodtrucks();
  }

  getFoodtrucks() {
    this.userService.misFoodtrucks().subscribe(
      (success) => (this.foodtrucks = success),
      (error) => (this.error = error)
    );
  }
}
