import { HistoriaClinica } from './../../../clases/historiaClinica/historia-clinica';
import { Especialidad } from './../../../clases/especialidad/especialidad';
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
  public datosDinamicos:any[]=[]
  public nuevaHistoria:HistoriaClinica;
  public nuevoDatoDinamico:string='';
  public nuevoValorDinamico:string='';

  
  constructor() { 
    this.nuevaHistoria=new HistoriaClinica();
  }

  ngOnInit(): void {
     
  }

  public AgregarALista(){  
    
    if(this.nuevaHistoria.datosDinamicos.length<3)
    {
      let encontro=false;

      this.nuevaHistoria.datosDinamicos.forEach(element => {
        if(element.nombre==this.nuevoDatoDinamico)
        {
          encontro=true;
        }
      });
  
      if(!encontro)
      {
        let unDato:any={}
        unDato.nombre=this.nuevoDatoDinamico;
        unDato.valor=this.nuevoValorDinamico;
        this.nuevaHistoria.datosDinamicos.push(unDato);
      }

    }
  }

  public BorrarDeLaLista(unDato:any)
  {
    this.nuevaHistoria.datosDinamicos=this.nuevaHistoria.datosDinamicos.filter((value,index,array)=>{
       return value.nombre!=unDato.nombre;
     });
  }

  public FinalizarTurno(){
    this.nuevaHistoria.resenia=this.resenia;
    this.nuevaHistoria.diagnostico=this.diagnostico;
    this.finalizarTurno.emit(this.nuevaHistoria);
  }
  
}
