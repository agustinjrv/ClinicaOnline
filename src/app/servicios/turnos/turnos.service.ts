import { AngularFirestoreCollection } from '@angular/fire/firestore/';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase } from '@angular/fire/database';
import { Turno } from 'src/app/clases/turno/turno';

@Injectable({
  providedIn: 'root'
})
export class TurnosService {

  
  public pathTurno='/Turnos';
  public coleccionTurnos:AngularFirestoreCollection<any>;
  public listaTurnos:any[]=[];
  
  
  
  constructor(private bd:AngularFirestore,private bdAuth:AngularFireDatabase) 
  { 
    this.coleccionTurnos=this.bd.collection(this.pathTurno);
    
    this.TraerTodos().valueChanges().subscribe((data)=>{
      
   
      this.listaTurnos=data;
    });
  }

  public  AgregarUno(nuevoTurno:Turno)
  {    
    nuevoTurno.id=this.bd.createId();
    console.log(nuevoTurno);
    this.coleccionTurnos.doc(nuevoTurno.id).set({...nuevoTurno});    
  }

  public  TraerTodos()
  {
    return this.coleccionTurnos;    
  }

  public ModificarUno(unTurno)
  {
    this.coleccionTurnos.doc(unTurno.id).set({...unTurno});
  }
  
}


