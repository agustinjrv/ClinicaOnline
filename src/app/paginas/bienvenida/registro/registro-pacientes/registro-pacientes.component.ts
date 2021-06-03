import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Paciente } from 'src/app/clases/paciente/paciente';
import { UsuarioService } from 'src/app/servicios/usuario/usuario.service';

@Component({
  selector: 'app-registro-pacientes',
  templateUrl: './registro-pacientes.component.html',
  styleUrls: ['./registro-pacientes.component.css']
})
export class RegistroPacientesComponent implements OnInit {

  pacienteRegForm: FormGroup;
  public titulo:string='PACIENTES';
  public unPaciente:Paciente;
  private isEmail =/\S+@\S+\.\S+/;
  public foto1:any;
  public foto2:any;
  public siteKey='6LeRO_UaAAAAAEloc6hOZf0LkiqBIfB9A3ZzlMek';
  public captcha=false;


  constructor( private fb: FormBuilder,private router: Router,private servicioUsuario:UsuarioService) { 

    this.unPaciente=new Paciente();
  }

  ngOnInit(): void {

    this.initForm();
  }


  isValidPaciente(field: string): string {
    const validateField = this.pacienteRegForm.get(field);
    return !validateField.valid && validateField.touched
      ? 'is-invalid'
      : validateField.touched
      ? 'is-valid'
      : '';
  }

  private initForm(): void {
    this.pacienteRegForm = this.fb.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      edad:['',[Validators.required,Validators.max(99)]],
      dni:['',[Validators.required]],
      obraSocial:['',[Validators.required]],
      correo: ['', [Validators.required, Validators.pattern(this.isEmail)]],
      clave: ['', [Validators.required, Validators.minLength(6)]],
      imagenPrincipal: ['', [Validators.required]],
      
    });
  }

  public SubirFoto1($event)
  {
    this.foto1 = $event.target.files[0];
  }

  public SubirFoto2($event)
  {
    this.foto2 = $event.target.files[0];
  }
 
    


  public RegistrarPaciente()
  {
      this.unPaciente.nombre=this.pacienteRegForm.value.nombre;
      this.unPaciente.apellido=this.pacienteRegForm.value.apellido;
      this.unPaciente.edad=this.pacienteRegForm.value.edad;
      this.unPaciente.dni=this.pacienteRegForm.value.dni;
      this.unPaciente.obraSocial=this.pacienteRegForm.value.obraSocial;
      this.unPaciente.correo=this.pacienteRegForm.value.correo;
      this.unPaciente.clave=this.pacienteRegForm.value.clave;
      //this.unPaciente.imagenPrincipal=this.pacienteRegForm.value.imagenPrincipal;
      //this.unPaciente.imagenSecundaria=this.pacienteRegForm.value.imagenSecundaria;

    this.servicioUsuario.AgregarUno(this.unPaciente,this.foto1,this.foto2);
  }

  public Captcha(algo)
  {
    this.captcha=true;
    console.log(this.captcha);
  }


}
