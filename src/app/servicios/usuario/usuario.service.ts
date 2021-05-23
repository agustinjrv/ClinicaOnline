import { EspecialidadesService } from './../especialidades/especialidades.service';
import { Injectable } from '@angular/core';
import {AngularFirestore,AngularFirestoreCollection,} from '@angular/fire/firestore/';
import { AngularFireDatabase } from '@angular/fire/database';
import { AuthService } from '../auth/auth.service';
import { Usuario } from 'src/app/clases/usuario/usuario';
import { Especialista } from 'src/app/clases/especialista/especialista';




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

  public AgregarUno(usuario:Usuario)
  {
    this.servicioAuth.Register(usuario.correo,usuario.clave).then((error)=>{

      ///Mostrar validaciones de las que trae

      this.AgregarUsuario(usuario);

    });
  
    
  }

  private async AgregarUsuario(usuario:any)
  {
    
    if(usuario.perfil=='Especialista'){
      await this.servicioEspecialidades.AgregarUno(usuario.especialidades);
    }

    usuario.id=this.bd.createId();
    await this.coleccionUsuarios.doc(usuario.id).set({...usuario});
    console.log('Usuario Agregado')
     
  }

  

  public TraerTodos()
  {
    return this.coleccionUsuarios;
        
    
  }
  

  public BorrarUno(unEspecialista:Especialista)
  {    
     this.coleccionUsuarios.doc(unEspecialista.id).delete();
  }

  public ModificarUno(unEspecialista:Especialista)
  {
    unEspecialista.estadoCuenta=true;
    this.coleccionUsuarios.doc(unEspecialista.id).set({...unEspecialista}).then(()=>{

      console.log('modificado');

    });
    //traer especialidades,cambiar estado
    //modificar espcialista
  }

  

}
