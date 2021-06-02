import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-modal-rechazar-turno',
  templateUrl: './modal-rechazar-turno.component.html',
  styleUrls: ['./modal-rechazar-turno.component.css']
})
export class ModalRechazarTurnoComponent implements OnInit {

  @Output() rechazarTurno:EventEmitter<any>=new EventEmitter<any>();

  public razonDeRechazo:string;
  
  constructor() { 
  
  }

  ngOnInit(): void {
    
     
  }

  public RechazarTurno(){
    
    this.rechazarTurno.emit(this.razonDeRechazo);
  }
  
}
