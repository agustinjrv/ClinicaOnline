
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaNoEncontradaComponent } from './paginas/pagina-no-encontrada/pagina-no-encontrada.component';
import { EsAdministradorGuard } from './guard/esAdministrador/es-administrador.guard';
import { EsPacienteGuard } from './guard/esPaciente/es-paciente.guard';
import { EsEspecialistaGuard } from './guard/esEspecialista/es-especialista.guard';


const routes: Routes = [

  { path:'',redirectTo:'bienvenida',pathMatch:'full'},  
  { path:'bienvenida', loadChildren: () => import('./paginas/bienvenida/bienvenida.module').then(m => m.BienvenidaModule) },  
  { path:'paciente', loadChildren: () => import('./paginas/paciente/paciente.module').then(m => m.PacienteModule),canActivate:[EsPacienteGuard] },
  { path:'administrador', loadChildren: () => import('./paginas/administrador/administrador.module').then(m => m.AdministradorModule) ,canActivate:[EsAdministradorGuard]},
  { path:'especialista', loadChildren: () => import('./paginas/especialista/especialista.module').then(m => m.EspecialistaModule),canActivate:[EsEspecialistaGuard] },
  
  {path:'paginaNoEncontrada',component:PaginaNoEncontradaComponent},

  {path:'**',redirectTo:'paginaNoEncontrada',pathMatch:'full'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
