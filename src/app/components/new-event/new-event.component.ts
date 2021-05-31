import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.css'],
})
export class NewEventComponent implements OnInit {
  error: any = '';

  minFromDate: any;
  minToDate: any;

  horaError: Boolean = false;
  numeroError: Boolean = false;
  codigoError: Boolean = false;
  telefonoError: Boolean = false;

  horas: Array<String> = [
    '00',
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
    '21',
    '22',
    '23',
  ];

  provincias = [
    'Buenos Aires',
    'Catamarca',
    'Chaco',
    'Chubut',
    'Córdoba',
    'Corrientes',
    'Entre Ríos',
    'Formosa',
    'Jujuy',
    'La Pampa',
    'La Rioja',
    'Mendoza',
    'Misiones',
    'Neuquén',
    'Río Nego',
    'Salta',
    'San Juan',
    'San Luis',
    'Santa Cruz',
    'Santa Fe',
    'Santiago del Estero',
    'Tierra del Fuego',
    'Tucumán',
  ];

  constructor(private eventService: EventService, private router: Router) {}

  ngOnInit(): void {
    let today = new Date();
    let tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    this.minFromDate = tomorrow;
    this.minToDate = tomorrow;
  }

  updateToDate(event: any) {
    this.minToDate = event.value;
  }

  isNumber(value: string) {
    return /^\d+$/.test(value);
  }

  isToBeforeFrom(
    fromDateHour: string,
    fromDateMinutes: string,
    toDateHour: string,
    toDateMinutes: string
  ) {
    let from = parseInt(fromDateHour + fromDateMinutes);
    let to = parseInt(toDateHour + toDateMinutes);
    return from > to;
  }

  formatDate(date: string) {
    let parts = date.split('/');
    let formatParts = parts.map((p) => (p.length == 1 ? '0' + p : p));
    let formatDate =
      formatParts[1] + '/' + formatParts[0] + '/' + formatParts[2];
    return formatDate;
  }

  formateHour(horas: string, minutos: string) {
    let h = horas.length == 1 ? '0' + horas : horas;
    let m = minutos.length == 1 ? '0' + minutos : minutos;
    return h + ':' + m;
  }

  onSubmit(
    nombre: string,
    tipo: string,
    formaDePago: any = null,
    diaI: string,
    diaF: string,
    horasInicio: string,
    minutosInicio: string,
    horasFin: string,
    minutosFin: string,
    descripcion: string,
    provincia: string,
    ciudad: string,
    calle: string,
    numero: any,
    nombreLugar: string,
    codigoPostal: any,
    email: any = null,
    telefono: any = null
  ) {
    let diffDays = new Date(diaF) > new Date(diaI);
    !diffDays &&
    this.isToBeforeFrom(horasInicio, minutosInicio, horasFin, minutosFin)
      ? (this.horaError = true)
      : (this.horaError = false);

    !this.isNumber(numero)
      ? (this.numeroError = true)
      : (this.numeroError = false);
    !this.isNumber(telefono)
      ? (this.telefonoError = true)
      : (this.telefonoError = false);
    !this.isNumber(codigoPostal)
      ? (this.codigoError = true)
      : (this.codigoError = false);

    if (
      !this.horaError &&
      !this.codigoError &&
      !this.telefonoError &&
      !this.numeroError
    ) {
      let diaInicio = this.formatDate(diaI);
      let diaFin = this.formatDate(diaF);
      let horaInicio = this.formateHour(horasInicio, minutosInicio);
      let horaFin = this.formateHour(horasFin, minutosFin);
      let direccion = {
        provincia: provincia,
        ciudad: ciudad,
        calle: calle,
        numero: numero,
        codigoPostal: codigoPostal,
        descripcion: nombreLugar,
      };
      let evento = {
        nombre: nombre,
        descripcion: descripcion,
        tipo: tipo,
        email: email,
        formaDePago: formaDePago,
        telefono: telefono,
      };
      this.alta(diaInicio, diaFin, horaInicio, horaFin, direccion, evento);
    }
  }

  alta(
    diaInicio: string,
    diaFin: string,
    horaInicio: string,
    horaFin: string,
    direccion: Object,
    evento: Object
  ) {
    this.eventService
      .newEvent(diaInicio, diaFin, horaInicio, horaFin, direccion, evento)
      .subscribe(
        (success) => {
          this.router.navigate(['homepage']);
        },
        (error) => (this.error = error)
      );
  }
}
