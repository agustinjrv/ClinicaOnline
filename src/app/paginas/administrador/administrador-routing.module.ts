import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministradorComponent } from './administrador.component';
import { GenerarUsuarioComponent } from './seccion-usuarios/generar-usuario/generar-usuario.component';
import { ListaUsuariosComponent } from './seccion-usuarios/lista-usuarios/lista-usuarios.component';
import { SeccionUsuariosComponent } from './seccion-usuarios/seccion-usuarios.component';
import { SolicitudesComponent } from './seccion-usuarios/solicitudes/solicitudes.component';

const routes: Routes = [
                          {path:'', component: AdministradorComponent},
                          {path:'seccionUsuarios',
                          children:[
                            {path:'',component:SeccionUsuariosComponent},
                            {path:'lista',component:ListaUsuariosComponent},
                            {path:'solicitudes',component:SolicitudesComponent},
                            {path:'registro',component:GenerarUsuarioComponent}, 
                          ]},
                          
                        ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministradorRoutingModule { }
