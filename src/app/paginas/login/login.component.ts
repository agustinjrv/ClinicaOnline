import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { doesNotReject } from 'assert';
import { Usuario } from 'src/app/clases/usuario/usuario';
import { AuthService } from 'src/app/servicios/auth/auth.service';
import { UsuarioService } from 'src/app/servicios/usuario/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private isEmail =/\S+@\S+\.\S+/;
  usuarioValidacion: FormGroup;
  public unUsuario:any={};
  public listaUsuarios:any[];

  constructor( private fb: FormBuilder,
               private router: Router,
               private servicioUsuario:UsuarioService,
               private authServicie:AuthService) { 

                this.servicioUsuario.TraerTodos().valueChanges().subscribe((data)=>{
                  this.listaUsuarios=data;
                });
               }

  ngOnInit(): void {
    this.initForm();
  }

  isValid(field: string): string {
    const validateField = this.usuarioValidacion.get(field);
    return !validateField.valid && validateField.touched
      ? 'is-invalid'
      : validateField.touched
      ? 'is-valid'
      : '';
  }

  private initForm(): void {
    this.usuarioValidacion = this.fb.group({
      correo: ['', [Validators.required, Validators.pattern(this.isEmail)]],
      clave: ['', [Validators.required]],
    });
  }

  public Ingresar()
  {
    this.unUsuario.correo=this.usuarioValidacion.get('correo').value;
    this.unUsuario.clave=this.usuarioValidacion.get('clave').value;
   

    this.authServicie.Login(this.unUsuario.correo,this.unUsuario.clave).then(()=>{
      
      let usuarioLogin:any={};

      for(let i=0;i<this.listaUsuarios.length;i++)
      {
        if(this.listaUsuarios[i].correo == this.unUsuario.correo)
        {
            usuarioLogin.correo= this.unUsuario.correo;
            usuarioLogin.perfil= this.listaUsuarios[i].perfil;
            break;	
        }
        
      }

      localStorage.setItem('usuarioLogeado',JSON.stringify(usuarioLogin));
      location.href="/home"; 
    });
  }

  public InicioRapido()
  {
    this.usuarioValidacion.setValue({correo:'admin@admin.com',clave:'123456'})
    console.log(this.usuarioValidacion);
    
    /*
    this.authServicie.Login('a@a.com','123456').then(()=>{
      console.log('aaa');
      this.router.navigateByUrl('/home');

  });*/
  }


  
    

}
