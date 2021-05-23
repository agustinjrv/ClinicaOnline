import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenerarUsuarioComponent } from './generar-usuario/generar-usuario.component';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { SeccionUsuariosComponent } from './seccion-usuarios.component';
import { SolicitudesComponent } from './solicitudes/solicitudes.component';

const routes: Routes = [
                        {path: '', component: SeccionUsuariosComponent},
                        {path:'lista',component:ListaUsuariosComponent},
                        {path:'solicitudes',component:SolicitudesComponent},
                        {path:'registro',component:GenerarUsuarioComponent}, 
                       ];
  

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeccionUsuariosRoutingModule { }
