import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { TurnosService } from 'src/app/servicios/turnos/turnos.service';

@Component({
  selector: 'app-modal-cancelar-turno',
  templateUrl: './modal-cancelar-turno.component.html',
  styleUrls: ['./modal-cancelar-turno.component.css']
})
export class ModalCancelarTurnoComponent implements OnInit {

  @Output() cancelarTurno:EventEmitter<any>=new EventEmitter<any>();

  public razonDeCancelacion:string='';
  
  constructor(private servicioTurnos:TurnosService) { 
  
  }

  ngOnInit(): void {
    
     
  }

  public CancelarTurno(){
    this.cancelarTurno.emit(this.razonDeCancelacion);
  }
  
  

}
