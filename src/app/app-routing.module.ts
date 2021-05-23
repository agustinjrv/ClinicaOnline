
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './paginas/home/home.component';
import { PaginaNoEncontradaComponent } from './paginas/pagina-no-encontrada/pagina-no-encontrada.component';

import { AuthGuard } from './guard/authGuard/auth.guard';
import { EsAdministradorGuard } from './guard/esAdministrador/es-administrador.guard';


const routes: Routes = [

  {path:'',redirectTo:'bienvenida',pathMatch:'full'},
  {path:'home',component:HomeComponent,canActivate:[AuthGuard]},   
  
  {path: 'seccionUsuarios', loadChildren: () => import('./paginas/seccion-usuarios/seccion-usuarios.module').then(m => m.SeccionUsuariosModule),canActivate:[EsAdministradorGuard]},
  {path: 'bienvenida', loadChildren: () => import('./paginas/bienvenida/bienvenida.module').then(m => m.BienvenidaModule) },  
  
  {path:'paginaNoEncontrada',component:PaginaNoEncontradaComponent},
  {path:'**',redirectTo:'paginaNoEncontrada',pathMatch:'full'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
