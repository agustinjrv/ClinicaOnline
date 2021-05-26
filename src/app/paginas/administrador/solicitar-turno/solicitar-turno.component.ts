import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Especialidad } from 'src/app/clases/especialidad/especialidad';
import { Especialista } from 'src/app/clases/especialista/especialista';
import { EspecialidadesService } from 'src/app/servicios/especialidades/especialidades.service';
import { UsuarioService } from 'src/app/servicios/usuario/usuario.service';

@Component({
  selector: 'app-solicitar-turno',
  templateUrl: './solicitar-turno.component.html',
  styleUrls: ['./solicitar-turno.component.css']
})
export class SolicitarTurnoComponent implements OnInit {

  public unEspecialista:Especialista;
  public listaEspecialidades:any[]=[];
  private listaEspecialistas:any[]=[];
  public especialistasMostrar:any[]=[];
  public especialidadSeleccionada:any='';
  public pacienteSeleccionado:any='Seleccione un Paciente';
  public listaPacientes:any[]=[];

  keyword = 'nombre';
  public inputEspecialidades:any='';
  @ViewChild('auto') auto;

  constructor(private fb: FormsModule,
              private router: Router,
              private servicioUsuario:UsuarioService,
              private servicioEspecialidades:EspecialidadesService,){ 

                this.unEspecialista=new Especialista();
                this.CargarTodo();
              }

  private CargarTodo(){
      this.CargarEspecialidades();
      this.CargarEspecialistas();
  }

  private CargarEspecialidades()
  {
    this.servicioEspecialidades.TraerTodos().valueChanges().subscribe((data)=>{

      this.listaEspecialidades=data.filter((value:Especialidad,index,array)=>{
            return value.mostrar==true;
      });
      
    })
  }

  private CargarEspecialistas()
  {
    this.servicioUsuario.TraerTodos().valueChanges().subscribe((data:any)=>{
      
      data.forEach(element => {
          
        if(element.perfil=='Especialista' && element.estadoCuenta)
        {
          this.listaEspecialistas.push(element);
        }
        else if(element.perfil=='Paciente')
        {
          this.listaPacientes.push(element);
        }

      });
    });
    
  }

  ngOnInit(): void {
    //this.initForm();
  }

  LimpiarPanel(): void 
  {
    this.auto.clear();
  }

  public SeleccionarPaciente($event){
      this.pacienteSeleccionado=$event;
  }

  public SeleccionarTurno($event)
  {
    this.especialidadSeleccionada=$event;

      
    this.especialistasMostrar=this.listaEspecialistas.filter((value:Especialista,index,array)=>{

                                  let encontro=false;
                                  value.especialidades.forEach(element => {
                                    
                                      if(element==this.especialidadSeleccionada)
                                      {
                                        encontro=true;
                                      }
                                  });

                                  return encontro
                                });


    
  }


}
