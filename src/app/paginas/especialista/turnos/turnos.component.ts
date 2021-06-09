import { Component, OnInit } from '@angular/core';
import { HistoriaClinica } from 'src/app/clases/historiaClinica/historia-clinica';
import { EestadoTurno } from 'src/app/clases/turno/turno';
import { HistoriaClinicaService } from 'src/app/servicios/historiaClinica/historia-clinica.service';
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

  public turnoDetalle;
  public listaHistoriasClinicas:any[]=[];
  public estadoTurno;

  

  constructor(private servicioTurnos:TurnosService,
              private servicioHistoriaClinica:HistoriaClinicaService) { 
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

    this.servicioHistoriaClinica.TraerTodos().valueChanges().subscribe((data)=>{
        this.listaHistoriasClinicas=data; 
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

  public FinalizarTurno(nuevaHistoria:HistoriaClinica)
  {
    
    this.turnoSeleccionado.estadoTurno=EestadoTurno.finalizado;
    this.turnoSeleccionado.resenia=nuevaHistoria.resenia;
    this.turnoSeleccionado.diagnostico=nuevaHistoria.diagnostico;
    this.servicioTurnos.ModificarUno(this.turnoSeleccionado);

    nuevaHistoria.correoPaciente=this.turnoSeleccionado.paciente;
    nuevaHistoria.correoEspecialista=this.usuarioLogeado.correo;
    nuevaHistoria.fecha=this.turnoSeleccionado.fecha;
    nuevaHistoria.idTurno=this.turnoSeleccionado.id;

    
    this.servicioHistoriaClinica.AgregarUno(nuevaHistoria);


  }

  
  public AbrirModalVerDetalles(unTurno)
  {

    
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
    
    var objO:any = document.getElementById("botonModalDetalles")??"";
    objO.click();
  }

}
