import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { DialogDeleteFoodtruckComponent } from './dialog-delete-foodtruck/dialog-delete-foodtruck.component';

@Component({
  selector: 'app-foodtruckmanagement',
  templateUrl: './foodtruckmanagement.component.html',
  styleUrls: ['./foodtruckmanagement.component.css']
})
export class FoodtruckmanagementComponent implements OnInit {
  displayedColumns: string[] = ['foodtruck', 'descripcion', 'provincia', 'ciudad', 'promedio', 'editar', 'eliminar'];
  error: any;
  foodtrucks: any;
  constructor(private userService: UserService, private router: Router, public dialog: MatDialog) { }

  openDialog(nombreFoodtruck:string, idFoodtruck:string) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      id : idFoodtruck,
      nombre : nombreFoodtruck 
    }

    const dialogRef = this.dialog.open(DialogDeleteFoodtruckComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => {
        if(data){
          var index = this.foodtrucks.findIndex((element:any) => element.id === data);
          this.foodtrucks = this.foodtrucks.splice(index,1); //no elimina el foodtruck correcto de la lista
        }
      }
    );    
  }




  ngOnInit(): void {
    this.userService.misFoodtrucks().subscribe(
      (success) => (this.foodtrucks = success), 
      (error) => (this.error = error)
    );
  }

}
