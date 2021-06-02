import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-finalizar-turno',
  templateUrl: './modal-finalizar-turno.component.html',
  styleUrls: ['./modal-finalizar-turno.component.css']
})
export class ModalFinalizarTurnoComponent implements OnInit {
  @Output() finalizarTurno:EventEmitter<any>=new EventEmitter<any>();

  public datos:any={};
  public resenia:string;
  public diagnostico:string;
  
  constructor() { 
  
  }

  ngOnInit(): void {
    
     
  }

  public FinalizarTurno(){
    this.datos.resenia=this.resenia;
    this.datos.diagnostico=this.diagnostico;
    this.finalizarTurno.emit(this.datos);
  }
  
}
