import { EestadoTurno } from './../../../clases/turno/turno';

import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { Especialidad } from 'src/app/clases/especialidad/especialidad';
import { Especialista } from 'src/app/clases/especialista/especialista';
import { EDiasSemana } from 'src/app/clases/horario/horario';
import { Turno } from 'src/app/clases/turno/turno';
import { EspecialidadesService } from 'src/app/servicios/especialidades/especialidades.service';
import { HorariosService } from 'src/app/servicios/horarios/horarios.service';
import { TurnosService } from 'src/app/servicios/turnos/turnos.service';
import { UsuarioService } from 'src/app/servicios/usuario/usuario.service';

@Component({
  selector: 'app-solicitar-turno',
  templateUrl: './solicitar-turno.component.html',
  styleUrls: ['./solicitar-turno.component.css']
})
export class SolicitarTurnoComponent implements OnInit {

  public unEspecialista: Especialista;
  public listaEspecialidades: any[] = [];
  private listaEspecialistas: any[] = [];
  public listaHorarios:any[]=[];
  public listaTurnos:Turno[]=[];

  public especialistasMostrar: any[] = [];
  public especialidadSeleccionada: any = '';
  public especialistaSeleccionado:any=false;
  public horariosDeEspecialista:any=false;
  public horariosMostrar:any;
  public diasMostrar:any[]=[];
  public turnosMostrar:any=false;


  public listaTurnosPorEspecialidad:Turno[]=[];
  public listaTurnosPorEspecialista:Turno[]=[];

  public cargo=false;


  public listaFechasMostrar:any[]=[];

  public eligioEspecialidad:boolean=false;
  public eligioEspecialista:boolean=false;
  public eligioFecha:boolean=false;
  public eligioTurno:boolean=false;


  keyword = 'nombre';
  public inputEspecialidades: any = '';
  @ViewChild('auto') auto;

  constructor(private fb: FormsModule,
    private router: Router,
    private servicioUsuario: UsuarioService,
    private servicioEspecialidades: EspecialidadesService,
    private servicioHorarios:HorariosService,
    private servicioTurnos:TurnosService
    ) {
      
    this.unEspecialista = new Especialista();
    
  }

  ngOnInit(): void {
    //this.initForm();
    this.CargarTodo();
    
  }

  private CargarTodo() {
    this.CargarEspecialidades();
    this.CargarEspecialistas();
    this.CargarHorarios();
    this.CargarTurnos();
    
  }

  private CargarTurnos()
  {
      this.servicioTurnos.TraerTodos().valueChanges().subscribe((data)=>{
          this.listaTurnos=data;
          
      });
  }

  private CargarEspecialidades() {
    this.servicioEspecialidades.TraerTodos().valueChanges().subscribe((data) => {

      this.listaEspecialidades = data.filter((value: Especialidad, index, array) => {
        return value.mostrar == true;
      });
      this.cargo=true;
    })
  }

  private CargarEspecialistas() {
    this.servicioUsuario.TraerTodos().valueChanges().subscribe((data: any) => {

      data.forEach(element => {

        if (element.perfil == 'Especialista' && element.estadoCuenta) {
          this.listaEspecialistas.push(element);
        }

      });
      
    });

  }

  public CargarHorarios()
  {
    this.servicioHorarios.TraerTodos().valueChanges().subscribe((data)=>{
      this.listaHorarios=data;
    })
  }




 

  LimpiarPanel(): void {
    this.auto.clear();
  }

  public SeleccionarEspecialidad($event) {
    
    this.especialidadSeleccionada = $event.nombre; 
    this.especialistaSeleccionado=false;
    this.horariosMostrar=false;
    this.horariosDeEspecialista=false;
    this.listaTurnosPorEspecialidad=[];
    this.listaTurnosPorEspecialista=[];
    this.diasMostrar=[];

    


    
    this.especialistasMostrar = this.listaEspecialistas.filter((value, index, array) => {

      let encontro = false;
      value.especialidades.forEach(element => {

        if (element == this.especialidadSeleccionada) {
          encontro = true;
        }
      });
      
      
      return encontro
    });
   
      
    
    this.eligioEspecialidad=true;
    this.BuscarTurnosDeEspecialidad()

    this.SeleccionarEspecialista(this.especialistasMostrar[0]);
    
    
    
  }

  private BuscarTurnosDeEspecialidad()
  {
      this.listaTurnosPorEspecialidad=this.listaTurnos.filter((value,index,array)=>{
          return value.especialidad==this.especialidadSeleccionada; 
      });

    }
    
    public BuscarTurnosDeEspecialista()
    {
      this.listaTurnosPorEspecialista=this.listaTurnosPorEspecialidad.filter((value,index,array)=>{
        return value.especialista==this.especialistaSeleccionado.correo;
      });
      
  }




  public SeleccionarEspecialista(unEspecialista:Especialista)
  {
      this.especialistaSeleccionado=unEspecialista;
      this.horariosMostrar=false;
      this.horariosDeEspecialista=false;
      this.diasMostrar=[];
      this.listaFechasMostrar=[];


    

      
      
      this.BuscarTurnosDeEspecialista();

      for(let i=0;i<this.listaHorarios.length;i++)
      {
          if(this.listaHorarios[i].correoEspecialista==this.especialistaSeleccionado.correo && 
              this.listaHorarios[i].especialidad==this.especialidadSeleccionada){


                this.horariosDeEspecialista=this.listaHorarios[i];
                break;

          }
      }

      
      this.horariosDeEspecialista.dias.forEach(element => {
          this.diasMostrar.push(EDiasSemana[element]);
      });

      

      let horaHasta=parseInt(this.horariosDeEspecialista.hasta.slice(0,2));
      let horaDesde=parseInt(this.horariosDeEspecialista.desde.slice(0,2));
      let rangoHoras= horaHasta-horaDesde;
      
      let fecha=new Date();
      let horaActual=new Date();
      
      
      
      
      for(let dia=1;dia<15;dia++)
      {
        fecha.setTime(Date.now());
        
        let esUnDiaValido=false;
        fecha.setDate(fecha.getDate()+dia);
        

        
            
        

        this.diasMostrar.forEach(element => {
          if(EDiasSemana[fecha.getDay()]==element)
          {
              esUnDiaValido=true;
          }
          
        });

        if(esUnDiaValido)
        {
          let nuevaFecha:any={};
          nuevaFecha.horarios=[];

          for(let i=0;i<rangoHoras;i++)
          {
            let turno:any={};
            turno.dia=EDiasSemana[fecha.getDay()] +' '+fecha.getDate() +'/'+(fecha.getMonth()+1) + '/' + fecha.getFullYear();
            nuevaFecha.dia =turno.dia;

  
            if(EDiasSemana[fecha.getDay()]=='sabado')
            {
              turno.hora= parseInt(this.horariosDeEspecialista.desdeSabados) + i + ':00';
            }
            else{
              turno.hora=(horaDesde + i) + ':00';
            }
            let existe=false;
            
            this.listaTurnosPorEspecialista.forEach((value,index,array)=>{

              if(value.fecha==turno.dia && value.hora==turno.hora)
              {
                  existe=true;
              }
            });
            
            if(!existe)
            {
              nuevaFecha.horarios.push(turno);
            }

          }
          
          this.listaFechasMostrar.push(nuevaFecha);
        }

      }
      this.eligioEspecialista=true;
  }


  public SeleccionarFecha(fecha)
  {
      console.log(fecha);
  }

  public SolicitarTurno(turnoSeleccionado)
  {
      let nuevoTurno = new Turno();
      nuevoTurno.especialidad=this.especialidadSeleccionada;
      nuevoTurno.especialista=this.especialistaSeleccionado.correo;
      nuevoTurno.estadoTurno=EestadoTurno.pendiente;
      nuevoTurno.fecha=turnoSeleccionado.dia;
      nuevoTurno.hora=turnoSeleccionado.hora;
      nuevoTurno.paciente=JSON.parse(localStorage.getItem('usuarioLogeado')).correo;


      this.servicioTurnos.AgregarUno(nuevoTurno);
      
        this.Reiniciar();

      
      
      alert('Turno Cargado');
      
  }

  public Reiniciar()
  {
    this.unEspecialista=new Especialista();
    this.listaEspecialidades= [];
    this.listaEspecialistas= [];
    this.listaHorarios=[];
    this.listaTurnos=[];
  
    this.especialistasMostrar= [];
    this.especialidadSeleccionada= '';
    this.especialistaSeleccionado=false;
    this.horariosDeEspecialista=false;
    this.horariosMostrar=false;
    this.diasMostrar=[];
    this.turnosMostrar=false;
  
  
    this.listaTurnosPorEspecialidad=[];
    this.listaTurnosPorEspecialista=[];
  
    this.cargo=false;
    this.listaFechasMostrar=[];
    this.eligioEspecialidad=false;
    this.eligioEspecialista=false;
    this.eligioFecha=false;
    this.eligioTurno=false;
    this.CargarTodo();
  }



}
