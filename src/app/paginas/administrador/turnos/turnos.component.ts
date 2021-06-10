import { Component, OnInit } from '@angular/core';
import { HistoriaClinica } from 'src/app/clases/historiaClinica/historia-clinica';
import { Paciente } from 'src/app/clases/paciente/paciente';
import { EestadoTurno } from 'src/app/clases/turno/turno';
import { HistoriaClinicaService } from 'src/app/servicios/historiaClinica/historia-clinica.service';
import { TurnosService } from 'src/app/servicios/turnos/turnos.service';
import { UsuarioService } from 'src/app/servicios/usuario/usuario.service';

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

  public listaPacientes:Paciente[]=[];

  public inputEspecialidad:string;
  public inputPaciente:string;
  public listaAux=[];

  public listaEstadosTurnos:any[]=[];

  

  constructor(private servicioTurnos:TurnosService,
              private servicioHistoriaClinica:HistoriaClinicaService,
              private servicioUsuario:UsuarioService) { 
  
  }

  ngOnInit(): void {
    this.usuarioLogeado=JSON.parse(localStorage.getItem('usuarioLogeado'));

    
    this.servicioTurnos.TraerTodos().valueChanges().subscribe((data)=>{
      
      this.listaTurnos=data;
      this.listaMostrar=this.listaTurnos;
      
      this.listaMostrar.forEach((element) => {
        element.estadoTurno=EestadoTurno[element.estadoTurno];
      });
      this.listaAux=this.listaMostrar;
      //this.cargo=true;
      
    });
    
    this.servicioUsuario.TraerTodos().valueChanges().subscribe((data)=>{
      this.listaPacientes=data.filter((value,index,array)=>{
        return value.perfil=='Paciente';
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
    if(this.inputPaciente!='')
    {

      setTimeout(()=>{
        
        let listaPacientesAux=this.listaPacientes.filter((value,index,array)=>{
          let aux=value.apellido +' '+ value.nombre;
            return aux.toLocaleLowerCase().includes(this.inputPaciente.toLocaleLowerCase());
        }).map((value,index,array)=>{
          return value.correo;
        });

        this.listaMostrar=[];

        for(let i=0;i<listaPacientesAux.length;i++)
        {
            for(let j=0;j<this.listaAux.length;j++)
            {
                if(listaPacientesAux[i]==this.listaAux[j].paciente)
                {
                  this.listaMostrar.push(this.listaAux[j]);
                }
            }
        }

      },500);
      
    }
    
    
  }

}
