import { Component, OnInit } from '@angular/core';
import { EestadoTurno } from 'src/app/clases/turno/turno';
import { TurnosService } from 'src/app/servicios/turnos/turnos.service';

@Component({
  selector: 'app-turnos',
  templateUrl: './turnos.component.html',
  styleUrls: ['./turnos.component.css']
})
export class TurnosComponent implements OnInit {

  public listaTurnos:any[]=[];
  public usuarioLogeado;
  public listaMostrar:any=false;
  public cargo=false;
  public turnoSeleccionado;

  

  constructor(private servicioTurnos:TurnosService) { 
  EestadoTurno.rechazado
  }

  ngOnInit(): void {
    this.usuarioLogeado=JSON.parse(localStorage.getItem('usuarioLogeado'));
    
    this.servicioTurnos.TraerTodos().valueChanges().subscribe((data)=>{
      this.listaTurnos=data;
      
      this.listaMostrar=this.listaTurnos.filter((value,index,array)=>{
        return value.especialista==this.usuarioLogeado.correo;
      });
      this.listaMostrar.forEach((element) => {
          element.estadoTurno=EestadoTurno[element.estadoTurno];
      });
      this.cargo=true;
  
      
    });



  }

  public AbrirModalCancelarTurno(unTurno:any)
  {
    this.turnoSeleccionado=unTurno;
    var objO:any = document.getElementById("botonModalCancelar")??"";
    objO.click();
  }

  public CancelarTurno(razonCancelacion:string)
  {

    
    this.turnoSeleccionado.estadoTurno=EestadoTurno.cancelado;
    this.turnoSeleccionado.razonCancelacion=razonCancelacion;
    this.servicioTurnos.ModificarUno(this.turnoSeleccionado);
  }

  public AbrirModalRechazarTurno(unTurno:any)
  {
    this.turnoSeleccionado=unTurno;
    var objO:any = document.getElementById("botonModalRechazar")??"";
    objO.click();
  }

  public RechazarTurno(razonRechazo:string)
  {
    console.log(razonRechazo);
    this.turnoSeleccionado.estadoTurno=EestadoTurno.rechazado;
    this.turnoSeleccionado.razonRechazo=razonRechazo;
    this.servicioTurnos.ModificarUno(this.turnoSeleccionado);
  }

  public AceptarTurno(unTurno)
  {
    this.turnoSeleccionado=unTurno;
    this.turnoSeleccionado.estadoTurno=EestadoTurno.aceptado;
    this.servicioTurnos.ModificarUno(this.turnoSeleccionado);
  }

  public AbrirModalFinalizarTurno(unTurno:any)
  {
    this.turnoSeleccionado=unTurno;
    var objO:any = document.getElementById("botonModalFinalizar")??"";
    objO.click();
  }

  public FinalizarTurno(datos:any)
  {
    console.log('estoy en main');
    console.log(datos);
    this.turnoSeleccionado.estadoTurno=EestadoTurno.finalizado;
    this.turnoSeleccionado.resenia=datos.resenia;
    this.turnoSeleccionado.diagnostico=datos.diagnostico;
    this.servicioTurnos.ModificarUno(this.turnoSeleccionado);
  }

}
