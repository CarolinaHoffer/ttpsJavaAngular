import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservas-table',
  templateUrl: './reservas-table.component.html',
  styleUrls: ['./reservas-table.component.css'],
})
export class ReservasTableComponent implements OnInit {
  @Input() reservas: any;
  @Input() titulo: any;
  @Input() actions: any;
  @Input() isPendiente: any;
  @Output() aceptar: EventEmitter<string> = new EventEmitter();
  @Output() rechazar: EventEmitter<string> = new EventEmitter();
  @Output() terminar: EventEmitter<string> = new EventEmitter();

  heightMax: number = 200;
  displayedColumns: string[] = [
    'Foodtruck',
    'Evento',
    'Fecha',
    'Hora',
    'Lugar',
    'Acciones',
  ];
  pendientes: Boolean = false;
  idActual: any;

  constructor() {}

  ngOnInit(): void {}

  aceptarFunction(id: any) {
    this.idActual = id;
    this.aceptar.emit();
  }

  rechazarFunction(id: any) {
    this.idActual = id;
    this.rechazar.emit();
  }

  terminarFunction(id: any) {
    this.idActual = id;
    this.terminar.emit();
  }
}
