import { EInicialDIa } from './../../../clases/horario/horario';
import { Component, OnInit } from '@angular/core';

import { Especialista } from 'src/app/clases/especialista/especialista';
import { EDiasSemana, Horario } from 'src/app/clases/horario/horario';

import { HorariosService } from 'src/app/servicios/horarios/horarios.service';

import { UsuarioService } from 'src/app/servicios/usuario/usuario.service';

@Component({
  selector: 'app-mi-perfil',
  templateUrl: './mi-perfil.component.html',
  styleUrls: ['./mi-perfil.component.css']
})
export class MiPerfilComponent implements OnInit {

  public cargo = false;
  public datosUsuario: Especialista;
  public usuarioLogeado = JSON.parse(localStorage.getItem('usuarioLogeado'));
  public especialidadSeleccionada: any = false;
  public especialidadesUsuario: string[] = [];
  public horariosEspecialista:any[]=[];
  
  public horariosDeEspecialidad: any = false;
  public diasMostrar='';
  public trabajaSabado=false;


  public diasBool: any = {};

  constructor(private servicioUsuario: UsuarioService,private servicioHorarios:HorariosService) {

    this.diasBool.lunes = false;
    this.diasBool.martes = false;
    this.diasBool.miercoles = false;
    this.diasBool.jueves = false;
    this.diasBool.viernes = false;
    this.diasBool.sabado = false;
  
    
    this.CargarTodo();
    
  }


  ngOnInit(): void {
    

  }

  public CargarTodo()
  {
    this.CargarUsuario();
  }
  
  public CargarHorarios()
  {
    this.servicioHorarios.TraerHorariosDeUnEspecialista(this.datosUsuario.correo)
    .valueChanges().subscribe((data)=>{
      this.horariosEspecialista=data;
      
      this.cargo = true;
    });
    
  }
  
  private CargarUsuario() {
    
    this.servicioUsuario.TraerUno(this.usuarioLogeado.correo).valueChanges().subscribe((data)=>{
      
      this.datosUsuario=<Especialista>data[0];
      this.CargarHorarios();
      
      
    });


  }

  public Seleccionar($event) {
    this.especialidadSeleccionada = $event;
    this.horariosDeEspecialidad=false;
    this.diasMostrar='';
    this.trabajaSabado=false;
    
    this.horariosEspecialista.forEach((element)=>{
          if(element.especialidad==this.especialidadSeleccionada)
          {
            this.horariosDeEspecialidad= element;
          }
    });

    if(this.horariosDeEspecialidad!=false)
    {
      this.horariosDeEspecialidad.dias.forEach(element => {

        if(element!=EDiasSemana.sabado)
        {
          this.diasMostrar+=EInicialDIa[element] + ' ,';
        }
        else{
          this.trabajaSabado=true;
        }
      });
      this.diasMostrar=this.diasMostrar.slice(0,this.diasMostrar.length-2);
    }
      
    //console.log(this.diasMostrar);

    
  }




  public ModificarFechas() {
    let inputInicio: any =  document.getElementById('horaInicio');
    let inputFinal: any = document.getElementById('horaFin');
   /* let dateInicio = new Date();
    let dateFin = new Date();

    dateInicio.setHours(inputInicio.value.slice(0, 2));
    dateFin.setHours(inputFinal.value.slice(0, 2));*/

    let horas:any={};

    horas.desde=inputInicio.value.slice(0, 2) + ':00';
    horas.hasta=inputFinal.value.slice(0, 2) + ':00';
    horas.especialidad=this.especialidadSeleccionada;
    horas.correoEspecialista=this.datosUsuario.correo;
    horas.dias=[];
    if(this.diasBool.lunes)
    {
      horas.dias.push(EDiasSemana.lunes);
    }
    if(this.diasBool.martes)
    {
      horas.dias.push(EDiasSemana.martes);
    }
    if(this.diasBool.miercoles)
    {
      horas.dias.push(EDiasSemana.miercoles);
    }
    if(this.diasBool.jueves)
    {
      horas.dias.push(EDiasSemana.jueves);
    }
    if(this.diasBool.viernes)
    {
      horas.dias.push(EDiasSemana.viernes);
    }
    if(this.diasBool.sabados)
    {
      horas.desdeSabados=(<any>document.getElementById('horaInicioSabados')).value;
      horas.hastaSabados=(<any>document.getElementById('horaFinSabados')).value;
      
      horas.dias.push(EDiasSemana.sabado);
    }
   
    if(!this.horariosDeEspecialidad){
      this.servicioHorarios.AgregarHorarioEspecialista(horas);

    }else
    {
      this.servicioHorarios.ModificarUno(this.horariosDeEspecialidad.id,horas);
    }
    



    setTimeout(()=>{
      this.CargarHorarios();
      this.Seleccionar(this.especialidadSeleccionada);
    },1000);
    

  }

}


