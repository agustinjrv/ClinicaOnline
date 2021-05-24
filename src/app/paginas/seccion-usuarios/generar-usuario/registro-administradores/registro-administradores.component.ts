import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Administrador } from 'src/app/clases/administrador/administrador';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/servicios/usuario/usuario.service';

@Component({
  selector: 'app-registro-administradores',
  templateUrl: './registro-administradores.component.html',
  styleUrls: ['./registro-administradores.component.css']
})
export class RegistroAdministradoresComponent implements OnInit {

 
  administradorRegForm: FormGroup;
  public unAdministrador:Administrador;
  private isEmail =/\S+@\S+\.\S+/;
  public foto1:any;

  constructor(private fb: FormBuilder,private router: Router,private servicioUsuario:UsuarioService) 
  { 
    this.unAdministrador=new Administrador();
  }

  ngOnInit(): void {
    this.initForm();
  }


  
  isValid(field: string): string {
    const validateField = this.administradorRegForm.get(field);
    return !validateField.valid && validateField.touched
      ? 'is-invalid'
      : validateField.touched
      ? 'is-valid'
      : '';
  }

  private initForm(): void 
  {
    this.administradorRegForm = this.fb.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      edad:['',[Validators.required,Validators.min(18),Validators.max(99)]],
      dni:['',[Validators.required]],
      correo: ['', [Validators.required, Validators.pattern(this.isEmail)]],
      clave: ['', [Validators.required, Validators.minLength(6)]],
      imagenPrincipal: ['', [Validators.required]],
    });

    
  }

  public SubirFoto1($event)
  {
    console.log($event)
    this.foto1 = $event.target.files[0];
  }



 

  public RegistrarAdministrador()
  {
    this.unAdministrador.nombre=this.administradorRegForm.value.nombre;
    this.unAdministrador.apellido=this.administradorRegForm.value.apellido;
    this.unAdministrador.edad=this.administradorRegForm.value.edad;
    this.unAdministrador.dni=this.administradorRegForm.value.dni;
    this.unAdministrador.correo=this.administradorRegForm.value.correo;
    this.unAdministrador.clave=this.administradorRegForm.value.clave;
    //this.unAdministrador.imagenPrincipal=this.administradorRegForm.value.imagenPrincipal;
    
    
    this.servicioUsuario.AgregarUno(this.unAdministrador,this.foto1);

    alert('Agregado');
    


  }
}
