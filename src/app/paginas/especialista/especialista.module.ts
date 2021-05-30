import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EspecialistaRoutingModule } from './especialista-routing.module';
import { EspecialistaComponent } from './especialista.component';
import { TablaEspecialidadesComponent } from './tabla-especialidades/tabla-especialidades.component';
import { MiPerfilComponent } from './mi-perfil/mi-perfil.component';
import { CheckboxComponent } from 'src/app/componentes/checkbox/checkbox.component';




@NgModule({
  declarations: [
    EspecialistaComponent,
    TablaEspecialidadesComponent,
    MiPerfilComponent,
    CheckboxComponent,
    
  ],
  imports: [
    CommonModule,
    EspecialistaRoutingModule,
    
    
  ]
})
export class EspecialistaModule { }
