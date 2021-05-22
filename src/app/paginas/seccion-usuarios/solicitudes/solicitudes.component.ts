import { Especialidad } from './../../../clases/especialidad/especialidad';
import { UsuarioService } from 'src/app/servicios/usuario/usuario.service';
import { Component, OnInit } from '@angular/core';
import { Especialista } from 'src/app/clases/especialista/especialista';
import { EspecialidadesService } from 'src/app/servicios/especialidades/especialidades.service';


@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.component.html',
  styleUrls: ['./solicitudes.component.css']
})
export class SolicitudesComponent implements OnInit {

  public mostrarSpinner=true;
  public listaEspecialistas:any[]=[];

  constructor(private servicioUsuario:UsuarioService,private servicioEspecialidades:EspecialidadesService ) 
  { 
      
  }

  ngOnInit(): void {

    
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

  public ActivarCuenta(unEspecialista:Especialista)
  {
      this.servicioUsuario.ModificarUno(unEspecialista);
      this.servicioEspecialidades.ModificarUno(unEspecialista.especialidad);
  }


  public NegarCuenta(unEspecialista:Especialista)
  {
    this.servicioUsuario.BorrarUno(unEspecialista);
    this.servicioEspecialidades.BorrarUno(unEspecialista.id);
  }

}
