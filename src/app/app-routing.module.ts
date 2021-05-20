import { GenerarUsuarioComponent } from './paginas/seccion-usuarios/generar-usuario/generar-usuario.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidaComponent } from './paginas/bienvenida/bienvenida.component';
import { HomeComponent } from './paginas/home/home.component';
import { LoginComponent } from './paginas/login/login.component';
import { PaginaNoEncontradaComponent } from './paginas/pagina-no-encontrada/pagina-no-encontrada.component';
import { RegistroComponent } from './paginas/registro/registro.component';

import { SeccionUsuariosComponent } from './paginas/seccion-usuarios/seccion-usuarios.component';
import { SolicitudesComponent } from './paginas/seccion-usuarios/solicitudes/solicitudes.component';
import { ListaUsuariosComponent } from './paginas/seccion-usuarios/lista-usuarios/lista-usuarios.component';

const routes: Routes = [

  {path:'',redirectTo:'bienvenida',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'bienvenida',component:BienvenidaComponent},
  {path:'registro',component:RegistroComponent},    
  {path:'login',component:LoginComponent},
  {path:'paginaNoEncontrada',component:PaginaNoEncontradaComponent},
  {path:'seccionUsuarios',
   children:[
      {path:'',component:SeccionUsuariosComponent},
      {path:'lista',component:ListaUsuariosComponent},
      {path:'solicitudes',component:SolicitudesComponent},
      {path:'registro',component:GenerarUsuarioComponent},
   ] },
  {path:'**',redirectTo:'paginaNoEncontrada',pathMatch:'full'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
