
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './paginas/home/home.component';
import { PaginaNoEncontradaComponent } from './paginas/pagina-no-encontrada/pagina-no-encontrada.component';
import { AuthGuard } from './guard/authGuard/auth.guard';
import { EsAdministradorGuard } from './guard/esAdministrador/es-administrador.guard';


const routes: Routes = [

  {path:'',redirectTo:'bienvenida',pathMatch:'full'},
  {path:'home',component:HomeComponent,canActivate:[AuthGuard]},   
  
  {path: 'bienvenida', loadChildren: () => import('./paginas/bienvenida/bienvenida.module').then(m => m.BienvenidaModule) },  
  {path: 'paciente', loadChildren: () => import('./paginas/paciente/paciente.module').then(m => m.PacienteModule) },
  { path: 'administrador', loadChildren: () => import('./paginas/administrador/administrador.module').then(m => m.AdministradorModule) ,canActivate:[EsAdministradorGuard]},
  
  {path:'paginaNoEncontrada',component:PaginaNoEncontradaComponent},

  { path: 'especialista', loadChildren: () => import('./paginas/especialista/especialista.module').then(m => m.EspecialistaModule) },
  {path:'**',redirectTo:'paginaNoEncontrada',pathMatch:'full'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
