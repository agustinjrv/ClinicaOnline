import { Component, OnInit } from '@angular/core';
import { Especialidad } from 'src/app/clases/especialidad/especialidad';
import { Especialista } from 'src/app/clases/especialista/especialista';
import { EDiasSemana, Horario } from 'src/app/clases/horario/horario';
import { Usuario } from 'src/app/clases/usuario/usuario';
import { UsuarioService } from 'src/app/servicios/usuario/usuario.service';

@Component({
  selector: 'app-mi-perfil',
  templateUrl: './mi-perfil.component.html',
  styleUrls: ['./mi-perfil.component.css']
})
export class MiPerfilComponent implements OnInit {

  public cargo = false;
  public datosUsuario: Especialista;
  public usuarioLogeado = JSON.parse(localStorage.getItem('usuarioLogeado'));
  public especialidadSeleccionada: any = false;
  public horariosDeEspecialidad: any = false;
  public especialidadesUsuario: string[] = [];


  public lunes: Horario;
  public martes: Horario;
  public miercoles: Horario;
  public jueves: Horario;
  public viernes: Horario;
  public sabados: Horario;

  public diasBool: any = {};

  constructor(private servicioUsuario: UsuarioService,) {

    this.diasBool.lunes = false;
    this.diasBool.martes = false;
    this.diasBool.miercoles = false;
    this.diasBool.jueves = false;
    this.diasBool.viernes = false;
    this.diasBool.sabado = false;
    
    
    this.lunes = new Horario(EDiasSemana.lunes);
    this.martes = new Horario(EDiasSemana.martes);
    this.miercoles = new Horario(EDiasSemana.miercoles);
    this.jueves = new Horario(EDiasSemana.jueves);
    this.viernes = new Horario(EDiasSemana.viernes);
    this.sabados = new Horario(EDiasSemana.sabado);
    
    this.CargarUsuario();
    
  }

  ngOnInit(): void {
    

  }

  private CargarUsuario() {

    this.servicioUsuario.TraerTodos().valueChanges().subscribe((data: Usuario[]) => {
      for (let i = 0; i < data.length; i++) {
        if (data[i].correo == this.usuarioLogeado.correo) {
          this.datosUsuario = <Especialista>data[i];
          this.cargo = true;
          break;
        }
      }
    });


  }

  public Seleccionar($event) {
    this.especialidadSeleccionada = $event;
    this.datosUsuario.especialidades.forEach(element => {
      if (element.nombre == this.especialidadSeleccionada) {
        this.especialidadSeleccionada = element;
      }
    });
  }




  public ModificarFechas() {
    let inputInicio: any = document.getElementById('horaInicio');
    let inputFinal: any = document.getElementById('horaFin');

    let dateInicio = new Date();
    let dateFin = new Date();

    dateInicio.setHours(inputInicio.value.slice(0, 2));
    dateFin.setHours(inputFinal.value.slice(0, 2));

    if (this.diasBool.lunes) {
      this.especialidadSeleccionada.horarios.forEach((element: Horario) => {
        if (element.dia == EDiasSemana.lunes) {
          element.horaInicio = dateInicio.getHours();
          element.horaFin = dateFin.getHours();
        }
      });
    }

    if (this.diasBool.martes) {
      this.especialidadSeleccionada.horarios.forEach((element: Horario) => {
        if (element.dia == EDiasSemana.martes) {
          element.horaInicio = dateInicio.getHours();
          element.horaFin = dateFin.getHours();
        }
      });
    }

    if (this.diasBool.miercoles) {
      this.especialidadSeleccionada.horarios.forEach((element: Horario) => {
        if (element.dia == EDiasSemana.miercoles) {
          element.horaInicio = dateInicio.getHours();
          element.horaFin = dateFin.getHours();
        }
      });
    }

    if (this.diasBool.jueves) {
      this.especialidadSeleccionada.horarios.forEach((element: Horario) => {
        if (element.dia == EDiasSemana.jueves) {
          element.horaInicio = dateInicio.getHours();
          element.horaFin = dateFin.getHours();
        }
      });
    }

    if (this.diasBool.viernes) {
      this.especialidadSeleccionada.horarios.forEach((element: Horario) => {
        if (element.dia == EDiasSemana.viernes) {
          element.horaInicio = dateInicio.getHours();
          element.horaFin = dateFin.getHours();
        }
      });
    }

    if (this.diasBool.sabados) {
      this.especialidadSeleccionada.horarios.forEach((element: Horario) => {
        if (element.dia == EDiasSemana.sabado) {
          element.horaInicio = dateInicio.getHours();
          element.horaFin = dateFin.getHours();
        }
      });
    }

    this.datosUsuario.especialidades.forEach((element)=>{
      if(element.nombre==this.especialidadSeleccionada.nombre)
      {
        element=this.especialidadSeleccionada;
      }
    });

  }

}

