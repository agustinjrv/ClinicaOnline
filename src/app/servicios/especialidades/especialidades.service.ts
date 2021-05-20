import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore/';
import { Injectable } from '@angular/core';
import { Especialidad } from 'src/app/clases/especialidad/especialidad';

@Injectable({
  providedIn: 'root'
})
export class EspecialidadesService {

  public pathEspecialidad='/Especialidades';
  public coleccionEspecialidades:AngularFirestoreCollection<any>;
  public listaEspecialidades;
  

  constructor(private bd:AngularFirestore,private bdAuth:AngularFireDatabase) 
  { 
    this.coleccionEspecialidades=this.bd.collection(this.pathEspecialidad);
  }

  public AgregarUno(unaEspecialidad:any)
  {
    let flag=false;

    this.TrearTodos().valueChanges().subscribe((data)=>{
        this.listaEspecialidades=data;

        this.listaEspecialidades.forEach(element => {
          if(element==unaEspecialidad)  
          {
            flag=true;
          }
        });

        if(!flag)
        {
          this.AgregarEspecialidad(unaEspecialidad);
        }
    });
  }

  private AgregarEspecialidad(unaEspecialidad:string)
  {
    let nuevaEspecialidad= new Especialidad(unaEspecialidad,false);
    
    this.coleccionEspecialidades.add({...nuevaEspecialidad}).then(()=>{
      console.log('Especialidad Agregada');
    });
   
  }

  public TrearTodos()
  {
    return this.coleccionEspecialidades;    
  }

}
