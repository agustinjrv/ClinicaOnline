import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore/';
import { Injectable } from '@angular/core';
import { Especialista } from 'src/app/clases/especialista/especialista';

@Injectable({
  providedIn: 'root'
})
export class HorariosService {


  
  
  public coleccionHorarios: AngularFirestoreCollection<any>;
  public pathHorarios='/Horarios';
  public listaHorarios:any[]=[];
  
  constructor(private bd: AngularFirestore) { 

    this.coleccionHorarios=this.bd.collection(this.pathHorarios);
        
    this.TraerTodos().valueChanges().subscribe((data)=>{
      this.listaHorarios=data;

    });

  }


  public TraerTodos(){
      return this.coleccionHorarios;
  }

  public AgregarHorarioEspecialista(horas){
      horas.id=this.bd.createId()
      this.coleccionHorarios.doc(horas.id).set({...horas});
  }

  public ModificarUno(id:string,horas:any)
  {
    horas.id=id;
    this.coleccionHorarios.doc(id).set({...horas});
  }



  public TraerHorariosDeUnEspecialista(correoEspecialista:string)
  {
    return this.bd.collection(this.pathHorarios, ref=>ref.where("correoEspecialista", "==", correoEspecialista )); 
  }

}
