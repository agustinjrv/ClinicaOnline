import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EspecialistaRoutingModule } from './especialista-routing.module';
import { EspecialistaComponent } from './especialista.component';
import { TablaEspecialidadesComponent } from './tabla-especialidades/tabla-especialidades.component';
import { MiPerfilComponent } from './mi-perfil/mi-perfil.component';
import { CheckboxComponent } from 'src/app/componentes/checkbox/checkbox.component';
import { TurnosComponent } from './turnos/turnos.component';
import { ModalCancelarTurnoComponent } from './modal-cancelar-turno/modal-cancelar-turno.component';
import { ModalRechazarTurnoComponent } from './modal-rechazar-turno/modal-rechazar-turno.component';
import { ModalFinalizarTurnoComponent } from './modal-finalizar-turno/modal-finalizar-turno.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    EspecialistaComponent,
    TablaEspecialidadesComponent,
    MiPerfilComponent,
    CheckboxComponent,
    TurnosComponent,
    ModalCancelarTurnoComponent,
    ModalRechazarTurnoComponent,
    ModalFinalizarTurnoComponent,
    
  ],
  imports: [
    CommonModule,
    EspecialistaRoutingModule,
    FormsModule,
    ReactiveFormsModule
    
    
  ]
})
export class EspecialistaModule { }
