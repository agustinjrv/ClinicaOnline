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




@NgModule({
  declarations: [
    SeccionUsuariosComponent,
    SpinnerComponent,
    ListaUsuariosComponent,
    GenerarUsuarioComponent,
    SolicitudesComponent,
     TablaEspecialidadesComponent 
    
    
  ],
  imports: [
    CommonModule,
    SeccionUsuariosRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  
  
})
export class SeccionUsuariosModule { }
