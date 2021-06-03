import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore/';
import { Injectable } from '@angular/core';
import { HistoriaClinica } from 'src/app/clases/historiaClinica/historia-clinica';

@Injectable({
  providedIn: 'root'
})
export class HistoriaClinicaService {

     
  public pathHistoria='/historiaClinica';
  public coleccionTurnos:AngularFirestoreCollection<any>;
  public listaTurnos:any[]=[];
  
  
  
  constructor(private bd:AngularFirestore) 
  { 
    this.coleccionTurnos=this.bd.collection(this.pathHistoria);
    
    this.TraerTodos().valueChanges().subscribe((data)=>{
      
   
      this.listaTurnos=data;
    });
  }

  public  AgregarUno(nuevaHistoria:HistoriaClinica)
  {    
    nuevaHistoria.id=this.bd.createId();
    this.coleccionTurnos.doc(nuevaHistoria.id).set({...nuevaHistoria});  
    console.log(nuevaHistoria);
  }

  public  TraerTodos()
  {
    return this.coleccionTurnos;    
  }

  public ModificarUno(unTurno)
  {
    this.coleccionTurnos.doc(unTurno.id).set({...unTurno});
  }

  public BuscarUnaHistoriaPorCorreo(correo) {
    return this.bd.collection(this.pathHistoria, ref=>ref.where("correoPaciente", "==", correo ));    
  }



}
