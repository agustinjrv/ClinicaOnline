import { Component,EventEmitter ,OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Especialista } from 'src/app/clases/especialista/especialista';
import { UsuarioService } from 'src/app/servicios/usuario/usuario.service';

@Component({
  selector: 'app-registo-especialistas',
  templateUrl: './registo-especialistas.component.html',
  styleUrls: ['./registo-especialistas.component.css']
})
export class RegistoEspecialistasComponent implements OnInit {

  especialistaRegForm: FormGroup;
  public unEspecialista:Especialista;
  private isEmail =/\S+@\S+\.\S+/;

  constructor(private fb: FormBuilder,private router: Router,private servicioUsuario:UsuarioService) 
  { 
    this.unEspecialista=new Especialista();
  }

  ngOnInit(): void {
    this.initForm();
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
      edad:['',[Validators.required,Validators.min(18),Validators.max(99)]],
      dni:['',[Validators.required]],
      correo: ['', [Validators.required, Validators.pattern(this.isEmail)]],
      especialidad:['',[Validators.required]],
      clave: ['', [Validators.required, Validators.minLength(6)]],
      imagenPrincipal: ['', [Validators.required]],
    });

    
  }



 

  public RegistrarEspecialista()
  {
    this.unEspecialista.nombre=this.especialistaRegForm.value.nombre;
    this.unEspecialista.apellido=this.especialistaRegForm.value.apellido;
    this.unEspecialista.edad=this.especialistaRegForm.value.edad;
    this.unEspecialista.dni=this.especialistaRegForm.value.dni;
    this.unEspecialista.especialidad=this.especialistaRegForm.value.especialidad;
    this.unEspecialista.correo=this.especialistaRegForm.value.correo;
    this.unEspecialista.clave=this.especialistaRegForm.value.clave;
    this.unEspecialista.imagenPrincipal=this.especialistaRegForm.value.imagenPrincipal;
    
    
    
    this.servicioUsuario.AgregarUno(this.unEspecialista);

  }


}
