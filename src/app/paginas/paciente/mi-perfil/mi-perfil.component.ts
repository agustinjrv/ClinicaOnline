import { Component, OnInit } from '@angular/core';
import { Paciente } from 'src/app/clases/paciente/paciente';
import { Usuario } from 'src/app/clases/usuario/usuario';
import { UsuarioService } from 'src/app/servicios/usuario/usuario.service';

@Component({
  selector: 'app-mi-perfil',
  templateUrl: './mi-perfil.component.html',
  styleUrls: ['./mi-perfil.component.css']
})
export class MiPerfilComponent implements OnInit {

  public listaPacientes:Paciente[]=[];
  public datosUsuario:any=false;
  public usarioLogeado=JSON.parse(localStorage.getItem('usuarioLogeado'));

  constructor( private servicioUsuario:UsuarioService,) { 
    this.CargarUsuario();
  }

  ngOnInit(): void {
  }

  private CargarUsuario()
  {

    this.servicioUsuario.TraerTodos().valueChanges().subscribe((data:Usuario[])=>{
        for(let i=0;i<data.length;i++)
        {
          if(data[i].correo==this.usarioLogeado.correo)
          {
              this.datosUsuario=data[i];
              break;
          }
        }  
    });
    

  }
      
        
      
}
