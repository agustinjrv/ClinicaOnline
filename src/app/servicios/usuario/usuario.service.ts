import { Injectable } from '@angular/core';
import {AngularFirestore,AngularFirestoreCollection,} from '@angular/fire/firestore/';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFireDatabase } from '@angular/fire/database';
import { Especialista } from 'src/app/clases/especialista/especialista';
import { Paciente } from 'src/app/clases/paciente/paciente';



@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  public pathPacientes='/Pacientes';
  public pathEspecialistas='/Especialistas';
  public coleccionPacientes:AngularFirestoreCollection<Paciente>;
  public coleccionEspecialistas:AngularFirestoreCollection<Especialista>;

  constructor(private bd:AngularFirestore, private AuthFirebase:AngularFireAuth ,private bdAuth:AngularFireDatabase) 
  { 
    this.coleccionPacientes=this.bd.collection(this.pathPacientes);
    this.coleccionEspecialistas=this.bd.collection(this.pathEspecialistas);
  }

  public AgregarUno(usuario:any)
  {

    this.AuthFirebase.createUserWithEmailAndPassword(usuario.correo,usuario.clave).then(()=>{
      this.EnviarMailDeVerificacion();
    });    

    if(usuario instanceof Paciente)
    {
      this.AgregarPaciente(usuario);
    }
    else if(usuario instanceof Especialista)
    {
      this.AgregarEspecialista(usuario)
    }
  }

  private AgregarEspecialista(usuario:Especialista)
  {
    this.coleccionEspecialistas.add({...usuario}).then(()=>{
      console.log('Especialista Agregado');
    });
   
  }

  async EnviarMailDeVerificacion(){
    return await (await this.AuthFirebase.currentUser).sendEmailVerification(); 
  }

  private AgregarPaciente(usuario:Paciente)
  { 
    this.coleccionPacientes.add({...usuario}).then(()=>{
      console.log('Paciente Agregado');
    });;
  }

  

  public BorrarUno(id:any)
  {

  }

  public ModificarUno()
  {

  }

  

}
