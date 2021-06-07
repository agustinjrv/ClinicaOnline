
import { EestadoTurno, Turno } from './../../../clases/turno/turno';
import { Component, OnInit } from '@angular/core';
import { TurnosService } from 'src/app/servicios/turnos/turnos.service';

import { HistoriaClinicaService } from 'src/app/servicios/historiaClinica/historia-clinica.service';


@Component({
  selector: 'app-mis-turnos',
  templateUrl: './mis-turnos.component.html',
  styleUrls: ['./mis-turnos.component.css']
})
export class MisTurnosComponent implements OnInit {

  public listaTurnos:any[]=[];
  public usuarioLogeado;
  public listaMostrar:any=false;
  public cargo=false;
  public turnoCancelar;


  public turnoDetalle;
  public estadoTurno:string;
  public listaHistoriasClinicas:any=[];
  

 
  

  constructor(private servicioTurnos:TurnosService,private servicioHistoria:HistoriaClinicaService) { 
    


  }

  ngOnInit(): void {
    this.usuarioLogeado=JSON.parse(localStorage.getItem('usuarioLogeado'));
    
    this.servicioTurnos.TraerTodos().valueChanges().subscribe((data)=>{
      this.listaTurnos=data;
      
      this.listaMostrar=this.listaTurnos.filter((value,index,array)=>{
        return value.paciente==this.usuarioLogeado.correo;
      });
      this.listaMostrar.forEach((element) => {
          element.estadoTurno=EestadoTurno[element.estadoTurno];
      });
      this.cargo=true;
  
      
    });

    this.servicioHistoria.BuscarUnaHistoriaPorCorreo(this.usuarioLogeado.correo).valueChanges().subscribe((data)=>{
        this.listaHistoriasClinicas=data;
    });



  }


  

  public AbrirModalCancelarTurno(unTurno:any)
  {
    this.turnoCancelar=unTurno;
    var objO:any = document.getElementById("botonModalCancelar")??"";
    objO.click();
  }

  public CancelarTurno(razonCancelacion:string)
  {
    this.turnoCancelar.estadoTurno=EestadoTurno.cancelado;
    this.turnoCancelar.razonCancelacion=razonCancelacion;
    this.servicioTurnos.ModificarUno(this.turnoCancelar);
  }

  public AbrirModalVerDetalles(unTurno)
  {

    console.log(unTurno);
    this.estadoTurno=unTurno.estadoTurno;
    
    switch(this.estadoTurno)
    {
        case 'cancelado':
            this.turnoDetalle=unTurno;
              break;
        
        case 'finalizado':
          
          this.listaHistoriasClinicas.forEach(element => {
            if(element.idTurno==unTurno.id)
            {
              this.turnoDetalle=element;
            }
          });
          
          break;
          case 'rechazado':
            this.turnoDetalle=unTurno;
            break;
    }
        
    console.log(this.turnoDetalle);    
    var objO:any = document.getElementById("botonModalDetalles")??"";
    objO.click();
  }

  public CalificarAtencion($event){

      this.turnoDetalle.comentarios=$event.comentarios;
      this.turnoDetalle.calificacion=$event.calificacion;
      this.turnoDetalle.encuesta=true;
      this.servicioHistoria.ModificarUno(this.turnoDetalle);
  }

}
