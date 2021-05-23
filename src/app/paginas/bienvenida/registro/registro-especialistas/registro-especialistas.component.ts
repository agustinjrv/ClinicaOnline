import { EspecialidadesService } from './../../../../servicios/especialidades/especialidades.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Especialista } from 'src/app/clases/especialista/especialista';
import { UsuarioService } from 'src/app/servicios/usuario/usuario.service';
import { Especialidad } from 'src/app/clases/especialidad/especialidad';
import { ReturnStatement } from '@angular/compiler';

@Component({
  selector: 'app-registro-especialistas',
  templateUrl: './registro-especialistas.component.html',
  styleUrls: ['./registro-especialistas.component.css']
})
export class RegistroEspecialistasComponent implements OnInit {
  
      
  especialistaRegForm: FormGroup;
  public unEspecialista:Especialista;
  public listaEspecialidades:any[]=[];
  @ViewChild('auto') auto;
  
  private isEmail =/\S+@\S+\.\S+/;
  keyword = 'nombre';
  public inputEspecialidades:any='';
  
  

  constructor(private fb: FormBuilder,
              private router: Router,
              private servicioUsuario:UsuarioService,
              private servicioEspecialidades:EspecialidadesService) 
              { 
                this.unEspecialista=new Especialista();
                this.servicioEspecialidades.TraerTodos().valueChanges().subscribe((data)=>{

                  this.listaEspecialidades=data.filter((value:Especialidad,index,array)=>{
                        return value.mostrar==true;
                  });
                  
                })
              }

  ngOnInit(): void {
    this.initForm();
  }
  
  LimpiarPanel(): void 
  {
    this.auto.clear();
  }
    
  


  
  isValidPaciente(field: string): string {
    const validateField = this.especialistaRegForm.get(field);
    return !validateField.valid && validateField.touched
      ? 'is-invalid'
      : validateField.touched
      ? 'is-valid'
      : '';
  }

  private initForm(): void 
  {
    this.especialistaRegForm = this.fb.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      edad:['',[Validators.required,Validators.max(99)]],
      dni:['',[Validators.required]],
      correo: ['', [Validators.required, Validators.pattern(this.isEmail)]],
    
      clave: ['', [Validators.required, Validators.minLength(6)]],
      imagenPrincipal: ['', [Validators.required]],
    });

    
  }


  public onEnter()
  {
  let unaEspecialidad:Especialidad=new Especialidad(this.inputEspecialidades,false)

    this.AgregarALista(unaEspecialidad);
  }

  public AgregarALista(especialidad:Especialidad){  
    let encontro=false;

    this.unEspecialista.especialidades.forEach(element => {
      if(element==especialidad.nombre)
      {
        encontro=true;
      }
    });

    if(!encontro)
    {
      this.unEspecialista.especialidades.push(especialidad.nombre);    
    }
    this.LimpiarPanel();
  }

  public BorrarDeLaLista(especialidad)
  {
    /*for(let i=0;i<this.unEspecialista.especialidades.length;i++)
    {
      if(this.unEspecialista.especialidades[i]==especialidad)
      {
          this.unEspecialista.especialidades.slice(i,1);
      }
    }
     this.listaEspecialidades.forEach(element => {
      hay que probar denuevo con filter
     });*/

     this.unEspecialista.especialidades=this.unEspecialista.especialidades.filter((value,index,array)=>{
       return value!=especialidad;
     })
  }
 

  public RegistrarEspecialista()
  {
    this.unEspecialista.nombre=this.especialistaRegForm.value.nombre;
    this.unEspecialista.apellido=this.especialistaRegForm.value.apellido;
    this.unEspecialista.edad=this.especialistaRegForm.value.edad;
    this.unEspecialista.dni=this.especialistaRegForm.value.dni;
    
    this.unEspecialista.correo=this.especialistaRegForm.value.correo;
    this.unEspecialista.clave=this.especialistaRegForm.value.clave;
    this.unEspecialista.imagenPrincipal=this.especialistaRegForm.value.imagenPrincipal;
    
    
    
    this.servicioUsuario.AgregarUno(this.unEspecialista);

    setTimeout(()=>{
      this.router.navigateByUrl('bienvenida/login');
    },500);

    

  }


}
