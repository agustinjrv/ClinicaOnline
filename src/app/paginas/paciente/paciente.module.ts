import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PacienteRoutingModule } from './paciente-routing.module';
import { PacienteComponent } from './paciente.component';
import { MisTurnosComponent } from './mis-turnos/mis-turnos.component';

import { SolicitarTurnoComponent } from './solicitar-turno/solicitar-turno.component';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { MiPerfilComponent } from './mi-perfil/mi-perfil.component';


@NgModule({
  declarations: [
    PacienteComponent,
    MisTurnosComponent,
    SolicitarTurnoComponent,
    MiPerfilComponent
  ],
  imports: [
    CommonModule,
    PacienteRoutingModule,
    AutocompleteLibModule

  ]
})
export class PacienteModule { }
