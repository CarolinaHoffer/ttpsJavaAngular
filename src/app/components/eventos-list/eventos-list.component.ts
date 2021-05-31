import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-eventos-list',
  templateUrl: './eventos-list.component.html',
  styleUrls: ['./eventos-list.component.css'],
})
export class EventosListComponent implements OnInit {
  eventosFuturos: any;
  eventosPasados: any;
  tituloFuturos: string = 'Eventos futuros';
  tituloPasados: string = 'Eventos pasados';
  error: any;

  constructor(private eventService: EventService, private router: Router) {}

  ngOnInit(): void {
    this.eventService.eventosFuturos().subscribe(
      (success) => (this.eventosFuturos = success),
      (error) => (this.error = error)
    );
    this.eventService.eventosPasados().subscribe(
      (success) => (this.eventosPasados = success),
      (error) => (this.error = error)
    );
  }
}
