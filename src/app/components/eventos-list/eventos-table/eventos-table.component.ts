import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-eventos-table',
  templateUrl: './eventos-table.component.html',
  styleUrls: ['./eventos-table.component.css'],
})
export class EventosTableComponent implements OnInit {
  @Input() eventos: any;
  @Input() titulo: any;

  heightMax: number = 200;
  displayedColumns: string[] = [
    'Nombre',
    'Tipo',
    'Fecha',
    'Hora',
    'Pago',
    'Detalle',
  ];

  constructor() {}

  ngOnInit(): void {}
}
