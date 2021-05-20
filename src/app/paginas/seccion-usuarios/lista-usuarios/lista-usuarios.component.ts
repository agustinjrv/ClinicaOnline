import { Especialista } from './../../../clases/especialista/especialista';
import { Paciente } from './../../../clases/paciente/paciente';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/usuario/usuario.service';
import { Administrador } from 'src/app/clases/administrador/administrador';


@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  public mostrar:string='Administradores';
  public listaUsuarios:any[]=[];
  public listaAdministradores:Administrador[]=[];
  public listaEspecialistas:Especialista[]=[];
  public listaPacientes:Paciente[]=[];

  constructor(private servicioUsuarios:UsuarioService) { 
    this.servicioUsuarios.TrearTodos().valueChanges().subscribe((data)=>{
      
      this.listaUsuarios=data;
      this.CargarListas();
      
    });
      
  }

  ngOnInit(): void {
  
  }

  public CargarListas()
  {
    console.log(this.listaUsuarios);
    this.listaUsuarios.forEach(element => {
        
      switch(element.perfil)
      {
        case 'Administrador':
          this.listaAdministradores.push(element);
          break;
        case 'Especialista':
          this.listaEspecialistas.push(element);
          break;
        case 'Paciente':
          this.listaPacientes.push(element);
          break;
      }
    });
  }

}
