import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tabla-especialidades',
  templateUrl: './tabla-especialidades.component.html',
  styleUrls: ['./tabla-especialidades.component.css']
})
export class TablaEspecialidadesComponent implements OnInit {

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
