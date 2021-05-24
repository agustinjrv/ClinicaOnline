import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeccionUsuariosRoutingModule } from './seccion-usuarios-routing.module';
import { SeccionUsuariosComponent } from './seccion-usuarios.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SpinnerComponent } from 'src/app/componentes/spinner/spinner.component';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { GenerarUsuarioComponent } from './generar-usuario/generar-usuario.component';
import { SolicitudesComponent } from './solicitudes/solicitudes.component';
import { TablaEspecialidadesComponent } from 'src/app/componentes/tabla-especialidades/tabla-especialidades.component';

import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { RegistroAdministradoresComponent } from './generar-usuario/registro-administradores/registro-administradores.component';
import { RegistroPacientesComponent } from './generar-usuario/registro-pacientes/registro-pacientes.component';
import { RegistroEspecialistasComponent } from './generar-usuario/registro-especialistas/registro-especialistas.component';

@NgModule({
  declarations: [
    SeccionUsuariosComponent,
    SpinnerComponent,
    ListaUsuariosComponent,
    GenerarUsuarioComponent,
    SolicitudesComponent,
     TablaEspecialidadesComponent,
     RegistroAdministradoresComponent,
     RegistroPacientesComponent,
     RegistroEspecialistasComponent
    
  ],
  imports: [
    CommonModule,
    SeccionUsuariosRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AutocompleteLibModule
    
  ],
  
  
})
export class SeccionUsuariosModule { }
