import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tabla-especialidades',
  templateUrl: './tabla-especialidades.component.html',
  styleUrls: ['./tabla-especialidades.component.css']
})
export class TablaEspecialidadesComponent implements OnInit {

@Input() listaEspecialidades:any=[];
@Output() aceptar:EventEmitter<any>=new EventEmitter<any>();
@Output() negar:EventEmitter<any>=new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  public Aceptar()
  {
    this.aceptar.emit(true)
  }

  public Negar()
  {
    this.negar.emit(true)
  }

}
