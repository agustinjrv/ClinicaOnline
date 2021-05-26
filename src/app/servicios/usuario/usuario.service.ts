import { EspecialidadesService } from './../especialidades/especialidades.service';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, } from '@angular/fire/firestore/';
import { AngularFireDatabase } from '@angular/fire/database';
import { AuthService } from '../auth/auth.service';
import { Usuario } from 'src/app/clases/usuario/usuario';
import { Especialista } from 'src/app/clases/especialista/especialista';
import { AngularFireStorage } from '@angular/fire/storage';
import * as firebase from 'firebase';
import { Paciente } from 'src/app/clases/paciente/paciente';
import { Router } from '@angular/router';




@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  public pathUsuarios = '/Usuarios';
  public coleccionUsuarios: AngularFirestoreCollection<any>;
  public listaUsuarios;

  constructor(private bd: AngularFirestore,
    private servicioAuth: AuthService,
    private bdAuth: AngularFireDatabase,
    private servicioEspecialidades: EspecialidadesService,
    private storage: AngularFireStorage,
    private router:Router) {
    this.coleccionUsuarios = this.bd.collection(this.pathUsuarios);
  }

  public AgregarUno(usuario: any, foto1: any, foto2?: any)
  {
    let fotoCargada1;
    let fotoCargada2;

    this.servicioAuth.Register(usuario.correo, usuario.clave).then((response) => {

         usuario.id = response.user.uid;


      if (foto2!=null)
      {

        
        const filePath = `/usuarios/${usuario.id}/1.png`;
        const ref = this.storage.ref(filePath);
        const task = this.storage.upload(filePath, foto1).then(()=>{

            const filePath2 = `/usuarios/${usuario.id}/2.png`;
            const ref2 = this.storage.ref(filePath2);
            const task2 = this.storage.upload(filePath2, foto2).then(()=>{

              let storages = firebase.default.storage();
              let storageRef = storages.ref();
              let spaceRef = storageRef.child(filePath);
    
              let storages2 = firebase.default.storage();
              let storageRef2 = storages2.ref();
              let spaceRef2 = storageRef2.child(filePath2);
    
              spaceRef.getDownloadURL().then(url => {
                fotoCargada1 = url;
                fotoCargada1 = `${fotoCargada1}`;
                usuario.imagenPrincipal=fotoCargada1;      
                
                  spaceRef2.getDownloadURL().then((url)=>{
                    fotoCargada2 = url;
                    fotoCargada2 = `${fotoCargada2}`;
                    usuario.imagenSecundaria=fotoCargada2;
                    this.AgregarUsuario(usuario);
                    
                  });

              });


            });

        });

      }
      else
      {

        
        const filePath = `/usuarios/${usuario.id}/1.png`;
        const ref = this.storage.ref(filePath);
        const task = this.storage.upload(filePath, foto1).then(()=>{

          let storages = firebase.default.storage();
          let storageRef = storages.ref();
          let spaceRef = storageRef.child(filePath);
  
            spaceRef.getDownloadURL().then(url => {
    
    
              fotoCargada1 = url
              fotoCargada1 = `${fotoCargada1}`
              usuario.imagenPrincipal = fotoCargada1;
    
              this.AgregarUsuario(usuario);
    
            });
        });       

      }

      

    });


  }

  public  TraerUno(correo)
  {
    return this.BuscarUsuarioCorreo(correo);
  }

  public BuscarUsuarioCorreo(correo) {
    return this.bd.collection(this.pathUsuarios, ref=>ref.where("correo", "==", correo ));    
  }

  public TraerPorPerfil(perfil:string)
  {
    return this.bd.collection(this.pathUsuarios, ref=>ref.where("perfil", "==", perfil ));    
  }

  public TraerEspecialistasCuentasNoVerficadas()
  {
    return this.bd.collection(this.pathUsuarios, ref=>ref.where("perfil", "==", 'Especialista').where('estadoCuenta','==',false));    
  }

  public async AgregarUsuario(usuario: any) {

    if (usuario.perfil == 'Especialista') {
      await this.servicioEspecialidades.AgregarUno(usuario.especialidades);
    }

    await this.coleccionUsuarios.doc(usuario.id).set({ ...usuario });
    
    this.router.navigateByUrl('bienvenida/login');

  }



  public TraerTodos() {
    return this.coleccionUsuarios;


  }


  public BorrarUno(unEspecialista: Especialista) {
    this.coleccionUsuarios.doc(unEspecialista.id).delete();
  }

  public ModificarUno(unEspecialista: Especialista) {
    unEspecialista.estadoCuenta = true;
    this.coleccionUsuarios.doc(unEspecialista.id).set({ ...unEspecialista }).then(() => {

      console.log('modificado');

    });
    //traer especialidades,cambiar estado
    //modificar espcialista
  }

  public AgregarHoras(unEspecialista:Especialista,horas:any)
  {
      let especialistaModi = JSON.parse(JSON.stringify(unEspecialista));
      especialistaModi.horas=horas;

      this.coleccionUsuarios.doc(unEspecialista.id).set(especialistaModi);
      
  }



}
