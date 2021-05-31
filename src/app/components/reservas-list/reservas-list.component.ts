import { Component, OnInit, ViewChild } from '@angular/core';
import { ReservaService } from 'src/app/services/reserva.service';

@Component({
  selector: 'app-reservas-list',
  templateUrl: './reservas-list.component.html',
  styleUrls: ['./reservas-list.component.css'],
})
export class ReservasListComponent implements OnInit {
  reservasPendientes: any;
  reservasAceptadas: any;
  tituloPendientes: string = 'Pedidos pendientes';
  tituloAceptadas: string = 'Pedidos aceptados';
  pendientes: Boolean = true;
  error: any;

  @ViewChild('pendientestable') tablaPendientes: any;
  @ViewChild('aceptadastable') tablaAceptadas: any;

  constructor(private reservaService: ReservaService) {}

  buscarReservasPendientes() {
    this.reservaService.pedidosPendientes().subscribe(
      (success) => (this.reservasPendientes = success),
      (error) => (this.error = error)
    );
  }

  buscarReservasAceptadas() {
    this.reservaService.pedidosAceptados().subscribe(
      (success) => (this.reservasAceptadas = success),
      (error) => (this.error = error)
    );
  }

  ngOnInit(): void {
    this.buscarReservasPendientes();
    this.buscarReservasAceptadas();
  }

  aceptarReserva() {
    this.reservaService.aceptarReserva(this.tablaPendientes.idActual).subscribe(
      (success) => {
        this.buscarReservasPendientes();
        this.buscarReservasAceptadas();
      },
      (error) => (this.error = error)
    );
  }

  rechazarReserva() {
    this.reservaService
      .rechazarReserva(this.tablaPendientes.idActual)
      .subscribe(
        (success) => this.buscarReservasPendientes(),
        (error) => (this.error = error)
      );
  }

  terminarReserva() {
    console.log(this.tablaAceptadas.idActual);
    this.reservaService.terminarReserva(this.tablaAceptadas.idActual).subscribe(
      (success) => this.buscarReservasAceptadas(),
      (error) => (this.error = error)
    );
  }
}
