import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore/';
import { Injectable } from '@angular/core';
import { Especialidad } from 'src/app/clases/especialidad/especialidad';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})
export class EspecialidadesService {

  public pathEspecialidad='/Especialidades';
  public coleccionEspecialidades:AngularFirestoreCollection<any>;
  public listaEspecialidades:any[]=[];
  
  
  
  constructor(private bd:AngularFirestore,private bdAuth:AngularFireDatabase) 
  { 
    this.coleccionEspecialidades=this.bd.collection(this.pathEspecialidad);
    
    this.TraerTodos().valueChanges().subscribe((data)=>{
      
   
      this.listaEspecialidades=data;
    });
  }

  public  AgregarUno(nuevasEspecialidades:any[])
  {
    
    for(let i=0;i<nuevasEspecialidades.length;i++)
    {
      let encontro=false;
      for(let j=0;j<this.listaEspecialidades.length;j++)
      {
        if(nuevasEspecialidades[i]==this.listaEspecialidades[j].nombre)
        {
            encontro=true;
            break;
        }        
      } 

      if(!encontro)
      {
        this.AgregarEspecialidad( nuevasEspecialidades[i]);
      }   
    }
    
    
   
    
  }



  private AgregarEspecialidad(unaEspecialidad:string)
  {

   
      let nuevaEspecialidad= new Especialidad(unaEspecialidad,false);
      nuevaEspecialidad.id=this.bd.createId();
    
      this.coleccionEspecialidades.add({...nuevaEspecialidad}).then(()=>{
        console.log('Especialidad Agregada');
      });
  }

  public  TraerTodos()
  {
    return this.coleccionEspecialidades;    
  }

  public ModificarUno(unaEspecialidad:any)
  {
      let especialidadModi:Especialidad;

      this.listaEspecialidades.forEach(element => {

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
