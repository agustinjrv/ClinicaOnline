import { EestadoTurno, Turno } from './../../../clases/turno/turno';
import { Paciente } from './../../../clases/paciente/paciente';
import { Component, Input, OnInit } from '@angular/core';
import { TurnosService } from 'src/app/servicios/turnos/turnos.service';


@Component({
  selector: 'app-mis-turnos',
  templateUrl: './mis-turnos.component.html',
  styleUrls: ['./mis-turnos.component.css']
})
export class MisTurnosComponent implements OnInit {

  @Input() usuarioSeleccionado:any=false;
  public listaTurnos:any[]=[];
  public usuarioLogeado;
  public listaMostrar:any=false;
  public cargo=false;
  public turnoCancelar;

  

  constructor(private servicioTurnos:TurnosService) { 
  


  }

  ngOnInit(): void {
    this.usuarioLogeado=this.usuarioSeleccionado;
    
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

}
