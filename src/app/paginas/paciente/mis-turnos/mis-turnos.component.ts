import { element } from 'protractor';

import { EestadoTurno, Turno } from './../../../clases/turno/turno';
import { Component, OnInit } from '@angular/core';
import { TurnosService } from 'src/app/servicios/turnos/turnos.service';

import { HistoriaClinicaService } from 'src/app/servicios/historiaClinica/historia-clinica.service';
import { UsuarioService } from 'src/app/servicios/usuario/usuario.service';
import { Especialista } from 'src/app/clases/especialista/especialista';


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


  public inputEspecialidad:string;
  public inputEspecialista:string;
  public listaAux:any[]=[];

  public listaDeEspecialistas:Especialista[]=[];

  constructor(private servicioTurnos:TurnosService,
    private servicioHistoria:HistoriaClinicaService,
    private servicioUsuario:UsuarioService) { 
    
   }

  ngOnInit(): void {
    this.usuarioLogeado=JSON.parse(localStorage.getItem('usuarioLogeado'));

    this.servicioUsuario.TraerTodos().valueChanges().subscribe((data)=>{
      this.listaDeEspecialistas=data.filter((value,index,array)=>{
        return value.perfil=='Especialista';
      });
      this.cargo=true; 
    });
    
    this.servicioTurnos.TraerTodos().valueChanges().subscribe((data)=>{
      this.listaTurnos=data;
      
      this.listaMostrar=this.listaTurnos.filter((value,index,array)=>{
        return value.paciente==this.usuarioLogeado.correo;
      });
      this.listaMostrar.forEach((element) => {
          element.estadoTurno=EestadoTurno[element.estadoTurno];
      });

      this.listaAux=this.listaMostrar;

      this.listaAux.forEach((element)=>{

        this.listaDeEspecialistas.forEach(especialista => {
          if(element.especialista==especialista.correo)
          {

          }
        });
      })

      
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

  public BuscarPorEspecialidad()
  {    

    if(this.inputEspecialidad!='')
    {
      setTimeout(()=>{
        this.listaMostrar=this.listaAux.filter((value,index,array)=>{
          return value.especialidad.toLocaleLowerCase().includes(this.inputEspecialidad.toLocaleLowerCase());
          });
      },500);
    }
    
      
  }

  public BuscarPorEspecialista()
  {
    
    if(this.inputEspecialista!='')
    {
      

      setTimeout(()=>{

        let listaEspecialistaAux=this.listaDeEspecialistas.filter((value,index,array)=>{
          let aux=value.apellido +' '+ value.nombre;
            return aux.includes(this.inputEspecialista.toLocaleLowerCase());
        }).map((value,index,array)=>{
          return value.correo;
        });
        this.listaMostrar=[];

        for(let i=0;i<listaEspecialistaAux.length;i++)
        {
            for(let j=0;j<this.listaAux.length;j++)
            {
                if(listaEspecialistaAux[i]==this.listaAux[j].especialista)
                {
                  this.listaMostrar.push(this.listaAux[j]);
                }
            }
        }

      },500);
      
    }
    
    
  }

  public AsignarColor(unTurno:Turno)
  {
      let retorno='';
      
      switch((<string><any>unTurno.estadoTurno))
      {
        case "pendiente":
          retorno='bg-warning text-dark';
          break;
        case "aceptado":
          retorno='bg-primary';
          break;
        case "cancelado":
          retorno='bg-danger text-white';
          break;
        case "finalizado":
          retorno='bg-success text-white';
          break;
        case "rechazado":
          retorno='bg-danger text-white'
          break;
      }
      return retorno;
      
  }


}
