import { Especialidad } from 'src/app/clases/especialidad/especialidad';

import { UsuarioService } from 'src/app/servicios/usuario/usuario.service';
import { Component, OnInit } from '@angular/core';
import { Especialista } from 'src/app/clases/especialista/especialista';
import { EspecialidadesService } from 'src/app/servicios/especialidades/especialidades.service';
import { TablaEspecialidadesComponent } from 'src/app/componentes/tabla-especialidades/tabla-especialidades.component';


@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.component.html',
  styleUrls: ['./solicitudes.component.css']
})
export class SolicitudesComponent implements OnInit {

  public mostrarSpinner=true;
  public listaEspecialistas:any[]=[];
  public listaEspecialidades:any=false;
  public especialistaSeleccionado:Especialista;

  constructor(private servicioUsuario:UsuarioService,private servicioEspecialidades:EspecialidadesService ) 
  { 
      
  }

  ngOnInit(): void {

    /*this.servicioUsuario.TraerPorPerfil('Especialista').valueChanges().subscribe((data)=>{

      this.listaEspecialistas=data;
    });*/
    this.servicioUsuario.TraerTodos().valueChanges().subscribe((data)=>{

      this.listaEspecialistas=data.filter((value,index,array)=>{
        return value.perfil == 'Especialista'
      }).filter((value :Especialista,index,array)=>{
        return value.estadoCuenta==false;
      });     
      
      setTimeout(()=>{
        this.mostrarSpinner=false;
        
      },500);
    })
  }

  public ActivarCuenta(a)
  {
      this.servicioUsuario.ModificarUno(this.especialistaSeleccionado);

      this.especialistaSeleccionado.especialidades.forEach(element => {
        this.servicioEspecialidades.ModificarUno(element.nombre);
      });
  }


  public NegarCuenta(a)
  {
    this.servicioUsuario.BorrarUno(this.especialistaSeleccionado);
  }

  public SeleccionarEspecialista(especialista){
      this.especialistaSeleccionado=especialista;
      this.listaEspecialidades=[];
      this.listaEspecialidades=especialista.especialidades;

  }

}
