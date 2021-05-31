import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ReservaService } from 'src/app/services/reserva.service';

@Component({
  selector: 'app-dialog-puntear-foodtruck',
  templateUrl: './dialog-puntear-foodtruck.component.html',
  styleUrls: ['./dialog-puntear-foodtruck.component.css']
})
export class DialogPuntearFoodtruckComponent implements OnInit {
  nombreFoodtruck: any;
  idReserva: any;
  message: string="";

  constructor(
    private reservaService: ReservaService,
    private dialogRef: MatDialogRef<DialogPuntearFoodtruckComponent>,
    @Inject(MAT_DIALOG_DATA) data: any) {
      this.nombreFoodtruck = data.nombreFoodtruck;
      this.idReserva = data.idReserva;
    }

  ngOnInit(): void {
  }

  save(limpieza:any, sabor:any, simpatia:any, calidadPrecio:any, disenio:any) {
    this.reservaService.
      puntuar(this.idReserva,limpieza, sabor, simpatia, calidadPrecio, disenio)
      .subscribe(
        (success)=>{this.message="Se puntuó con éxito";},
        (error)=>(this.message="No se pudo puntuar"),
        ()=>(this.dialogRef.close(this.message))
      );
  }

  close() {
    this.dialogRef.close("cancelar");
  }
}
