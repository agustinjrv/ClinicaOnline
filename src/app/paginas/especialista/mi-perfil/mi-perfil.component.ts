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

  public claseBoton1='btn btn-danger';
  public claseBoton2='btn btn-danger';
  public claseBoton3='btn btn-danger';
  public claseBotonSabados1='btn btn-danger';
  public claseBotonSabados2='btn btn-danger';


  
  public horaDesde:string='';
  public horaHasta:string='';
  public horaDesdeSabados:string='';
  public horaHastaSabados:string='';



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

  public SeleccionarHorario(numeroBoton:number)
  {
      switch(numeroBoton)
      {
        case 1:
              this.claseBoton1='btn btn-success';
              this.claseBoton2='btn btn-danger';
              this.claseBoton3='btn btn-danger';
              this.horaDesde='08';
              this.horaHasta='12';
              
          break;
        case 2:
              this.claseBoton1='btn btn-danger';
              this.claseBoton2='btn btn-success';
              this.claseBoton3='btn btn-danger';
              this.horaDesde='08';
              this.horaHasta='17';
          break;
          case 3:
              this.claseBoton1='btn btn-danger';
              this.claseBoton2='btn btn-danger';
              this.claseBoton3='btn btn-success';
              this.horaDesde='13';
              this.horaHasta='19';
          break;
      }

  }

  public SeleccionarHorarioSabados(numeroBoton:number)
  {
    switch(numeroBoton)
    {
      case 1:
            this.claseBotonSabados1='btn btn-success';
            this.claseBotonSabados2='btn btn-danger';
            this.horaDesdeSabados='08';
            this.horaHastaSabados='12';
            
        break;
      case 2:
            this.claseBotonSabados1='btn btn-danger';
            this.claseBotonSabados2='btn btn-success';
            this.horaDesdeSabados='08';
            this.horaHastaSabados='14';
        break;
    }


  }




  public ModificarFechas() {

    let horas:any={};

    horas.desde=this.horaDesde + ':00';
    horas.hasta=this.horaHasta + ':00';

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
      horas.desdeSabados=this.horaDesdeSabados + ':00';
      horas.hastaSabados=this.horaHastaSabados + ':00';
      
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


