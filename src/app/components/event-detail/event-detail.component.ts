import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from 'src/app/services/event.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogPuntearFoodtruckComponent } from './dialog-puntear-foodtruck/dialog-puntear-foodtruck.component';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {
  evento: any;
  sub: any;
  id: any;
  reservas: any;
  displayedColumns: string[] = [
    'foodtruck',
    'estado'
  ];

  constructor(private route: ActivatedRoute,
    private router: Router,
    private eventService: EventService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe((params) => {
      this.id = +params['id'];
    });
    this.eventService.getEvent(this.id).subscribe(
      (success) => {this.evento = success;},
      (error) => this.router.navigate(['homepage'])
    );
    this.eventService.getReservas(this.id).subscribe(
      (success) => {this.reservas = success;},
      (error) => this.router.navigate(['homepage'])
    );
  }

  openDialogPuntuar(idReserva:string, nombreFoodtruck:string) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      idReserva: idReserva,
      nombreFoodtruck: nombreFoodtruck,
    };

    const dialogRef = this.dialog.open(
      DialogPuntearFoodtruckComponent,
      dialogConfig
    );

    dialogRef.afterClosed().subscribe((message) => {
      if(message!=="cancelar"){alert(message);
      this.eventService.getReservas(this.id).subscribe(
        (success) => {this.reservas = success;},
        (error) => this.router.navigate(['homepage'])
      );}
    });
    
  }
}
