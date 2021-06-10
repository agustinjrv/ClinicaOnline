import { Component, OnInit } from '@angular/core';
import { Especialista } from 'src/app/clases/especialista/especialista';
import { Paciente } from 'src/app/clases/paciente/paciente';
import { Usuario } from 'src/app/clases/usuario/usuario';
import { HistoriaClinicaService } from 'src/app/servicios/historiaClinica/historia-clinica.service';
import { UsuarioService } from 'src/app/servicios/usuario/usuario.service';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css']
})
export class PacientesComponent implements OnInit {

  public listaPacientes: Paciente[] = [];
  public usuarioLogeado = JSON.parse(localStorage.getItem('usuarioLogeado'));
  public listaHistoriaClinica: any[] = [];
  public cargo = false;
  public listaEspecialistas: Especialista[] = [];
  public historiaSeleccionada: any = false;
  public usuarioSeleccionado: any = false;

  constructor(private servicioUsuario: UsuarioService,
    private servicioHistoriaClinica: HistoriaClinicaService) {

  }

  ngOnInit(): void {
    this.CargarUsuario();
    this.CargarHistoria();

  }

  private CargarUsuario() {

    this.servicioUsuario.TraerTodos().valueChanges().subscribe((data: Usuario[]) => {

      this.listaPacientes = (<Paciente[]>data).filter((value, index, array) => {
        return value.perfil == 'Paciente';
      });

    });

  }

  private CargarHistoria() {
    this.servicioHistoriaClinica.TraerTodos().valueChanges().subscribe((data) => {
      
      this.listaHistoriaClinica=data.filter((value, index, array) => {
        return value.correoEspecialista == this.usuarioLogeado.correo;
      });

      let correosPacientes: any[] = [];
      correosPacientes = this.listaHistoriaClinica.map((value, index, array) => {
        return value.correoPaciente;
      });

      correosPacientes = correosPacientes.filter(this.onlyUnique);

      this.listaPacientes=this.listaPacientes.filter((value,index,array)=>{
        let encontro=false;
          correosPacientes.forEach(element => {
            if(value.correo==element)
            {
              return encontro;

            }            
          });

          return false;
      });
      this.cargo = true;
    })


    
  }

  public SeleccionarPaciente(unPaciente:Paciente)
  {
      this.usuarioSeleccionado=unPaciente;
      this.listaHistoriaClinica=this.listaHistoriaClinica.filter((value,index,array)=>{
        return value.paciente=unPaciente.correo;
      })
  }

  private onlyUnique(value, index, self) {
    return self.indexOf(value) === index;

  }




}
