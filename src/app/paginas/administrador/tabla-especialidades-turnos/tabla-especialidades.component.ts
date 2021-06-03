import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'tabla-especialidades-turnos',
  templateUrl: './tabla-especialidades-turnos.component.html',
  styleUrls: ['./tabla-especialidades-turnos.component.css']
})
export class TablaEspecialidadesTurnosComponent implements OnInit {

@Input() listaEspecialidades:any=[];
@Output() seleccionar:EventEmitter<any>=new EventEmitter<any>();
public estado=false;


  constructor() { }

  ngOnInit(): void {
  }

  public Seleccionar(especialidad)
  {
    this.seleccionar.emit(especialidad);
  }

   
  cambiar(): string {

    return !this.estado 
      ? ''
      : this.estado
      ? 'bg-primary'
      : '';
  }

}
