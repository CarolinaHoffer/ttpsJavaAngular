import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodtruckService } from '../../services/foodtruck.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogCrearReservaComponent } from './dialog-crear-reserva/dialog-crear-reserva.component';

@Component({
  selector: 'app-foodtruck-public-detail',
  templateUrl: './foodtruck-public-detail.component.html',
  styleUrls: ['./foodtruck-public-detail.component.css']
})
export class FoodtruckPublicDetailComponent implements OnInit {
  id: any;
  sub: any;
  foodtruck: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private foodtruckService: FoodtruckService,
    public dialog: MatDialog)
    {}

  ngOnInit(): void {
    this.sub = this.route.params.subscribe((params) => {
      this.id = +params['id'];
    });
    this.foodtruckService.getFoodtruck(this.id).subscribe(
      (success) => (this.foodtruck = success),
      (error) => this.router.navigate(['homepage'])
    );
  }

  openDialogDelete() {
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

    dialogRef.afterClosed().subscribe((data) => {console.log(data)});
  }
}
