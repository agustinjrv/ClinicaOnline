import { EspecialidadesService } from './../especialidades/especialidades.service';
import { Injectable } from '@angular/core';
import {AngularFirestore,AngularFirestoreCollection,} from '@angular/fire/firestore/';
import { AngularFireDatabase } from '@angular/fire/database';
import { AuthService } from '../auth/auth.service';



@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  public pathUsuarios='/Usuarios';
  public coleccionUsuarios:AngularFirestoreCollection<any>;
  public listaUsuarios;

  constructor(private bd:AngularFirestore,
              private servicioAuth:AuthService ,
              private bdAuth:AngularFireDatabase,
              private servicioEspecialidades:EspecialidadesService) 
  { 
    this.coleccionUsuarios=this.bd.collection(this.pathUsuarios);
  }

  public AgregarUno(usuario:any)
  {
    this.servicioAuth.Register(usuario.correo,usuario.clave).then((error)=>{

      ///Mostrar validaciones de las que trae
      this.AgregarUsuario(usuario);

    });
  
    
  }

  private AgregarUsuario(usuario:any)
  {

    if(usuario.perfil=='Especialista'){
      this.servicioEspecialidades.AgregarUno(usuario.especialidad);
    }


    this.coleccionUsuarios.add({...usuario}).then(()=>{
      console.log('Usuario Agregado');
    });
   
  }

  public TrearTodos()
  {
    return this.coleccionUsuarios;
        
    
  }
  

  public BorrarUno(id:any)
  {
      
  }

  public ModificarUno()
  {

  }

  

}
