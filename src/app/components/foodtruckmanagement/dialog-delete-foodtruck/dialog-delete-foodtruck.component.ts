import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FoodtruckService } from 'src/app/services/foodtruck.service';

@Component({
  selector: 'app-dialog-delete-foodtruck',
  templateUrl: './dialog-delete-foodtruck.component.html',
  styleUrls: ['./dialog-delete-foodtruck.component.css']
})
export class DialogDeleteFoodtruckComponent implements OnInit {
  nombre: string;
  id: string;

  constructor(private foodtruckService: FoodtruckService, private dialogRef: MatDialogRef<DialogDeleteFoodtruckComponent>,
    @Inject(MAT_DIALOG_DATA) data: any)  { 
      this.nombre = data.nombre;
      this.id = data.id;
    }

  ngOnInit(): void {
  }

  save() {
    this.foodtruckService.eliminarFoodtruck(this.id).subscribe(() => console.log("foodtruck eliminado"))
    this.dialogRef.close(this.id);
  }

  close() {
    this.dialogRef.close();

  }
}
