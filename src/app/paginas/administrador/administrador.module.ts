import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministradorRoutingModule } from './administrador-routing.module';
import { AdministradorComponent } from './administrador.component';
import { SeccionUsuariosComponent } from './seccion-usuarios/seccion-usuarios.component';
import { ListaUsuariosComponent } from './seccion-usuarios/lista-usuarios/lista-usuarios.component';
import { GenerarUsuarioComponent } from './seccion-usuarios/generar-usuario/generar-usuario.component';
import { SolicitudesComponent } from './seccion-usuarios/solicitudes/solicitudes.component';
import { TablaEspecialidadesComponent } from 'src/app/componentes/tabla-especialidades/tabla-especialidades.component';
import { RegistroAdministradoresComponent } from './seccion-usuarios/generar-usuario/registro-administradores/registro-administradores.component';
import { RegistroPacientesComponent } from './seccion-usuarios/generar-usuario/registro-pacientes/registro-pacientes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { SolicitarTurnoComponent } from './solicitar-turno/solicitar-turno.component';
import { GenericosModule } from 'src/app/genericos/genericos.module';
import { RegistroEspecialistasComponent } from './seccion-usuarios/generar-usuario/registro-especialistas/registro-especialistas.component';





@NgModule({
  declarations: [
    AdministradorComponent,
    SeccionUsuariosComponent,
    ListaUsuariosComponent,
    GenerarUsuarioComponent,
    SolicitudesComponent,
    TablaEspecialidadesComponent,
    RegistroAdministradoresComponent,
    RegistroPacientesComponent,
    RegistroEspecialistasComponent,
    SolicitarTurnoComponent
    

  ],
  imports: [
    CommonModule,
    AdministradorRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AutocompleteLibModule,
    GenericosModule
  ]
})
export class AdministradorModule { }