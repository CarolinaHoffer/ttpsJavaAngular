import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EventService } from 'src/app/services/event.service';
import { ReservaService } from 'src/app/services/reserva.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dialog-crear-reserva',
  templateUrl: './dialog-crear-reserva.component.html',
  styleUrls: ['./dialog-crear-reserva.component.css']
})
export class DialogCrearReservaComponent implements OnInit {
  nombre: string;
  id: string;
  idUsuario: any;
  message: string = ""
  eventosDeUsuario: any;

  constructor(
    private eventoService: EventService,
    private reservaService: ReservaService,
    private userService: UserService,
    private dialogRef: MatDialogRef<DialogCrearReservaComponent>,
    @Inject(MAT_DIALOG_DATA) data: any) {
      this.nombre = data.nombre;
      this.id = data.id;
      this.idUsuario = this.userService.getCurrentUserId();
     }

  ngOnInit(): void {
    this.eventoService.eventosDeUsuarioSinReservaDeFoodtruck(this.idUsuario, this.id).subscribe(
      (success) => (this.eventosDeUsuario = success),
      (error) => {this.message="No existen eventos para el usuario"; close()}
    );
  }

  save(idEvento:any) {
    if(idEvento!=="null"){
    this.reservaService.
      reservar(this.id, idEvento)
      .subscribe(
        (success)=>{this.message="Se agrego la reserva con éxito";},
        (error)=>(this.message="No se pudo reservar"))
    }
    else{this.message="No se puede reservar con un evento vacío";} 
    this.dialogRef.close(this.message);
  }

  close() {
    this.dialogRef.close("");
  }
}
