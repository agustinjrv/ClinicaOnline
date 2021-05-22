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
    
    this.TraerTodos().valueChanges().subscribe((data)=>{
      
   
      this.listaEspecialidades=data;
    });
  }

  public  AgregarUno(unaEspecialidad:any)
  {
    let flag1=false;
 
    this.listaEspecialidades.forEach(element => {
        if(element.nombre==unaEspecialidad)  
        {
          flag1=true;          
        }
     });

    if(!flag1)
    {
       this.AgregarEspecialidad(unaEspecialidad);
    }   
   
    
  }



  private AgregarEspecialidad(unaEspecialidad:string)
  {

   
      let nuevaEspecialidad= new Especialidad(unaEspecialidad,false);
    
      this.coleccionEspecialidades.add({...nuevaEspecialidad}).then(()=>{
        console.log('Especialidad Agregada');
      });

        //this.flag1=false;
        //this.flag2=0;
    
   
  }

  public  TraerTodos()
  {
    return this.coleccionEspecialidades;    
  }

  public ModificarUno(unaEspecialidad:string)
  {
      let especialidadModi:Especialidad;

      this.listaEspecialidades.forEach(element => {

        console.log('estoy en el foreach');
        if(element.nombre==unaEspecialidad)
        {
          especialidadModi=element;
        }

      });

      especialidadModi.mostrar=true;
      this.coleccionEspecialidades.doc(especialidadModi.id).set(especialidadModi);
  }

  public BorrarUno(id:string)
  {
    this.coleccionEspecialidades.doc(id).delete().then(()=>{
      console.log('borrado');
    });
  }

}
