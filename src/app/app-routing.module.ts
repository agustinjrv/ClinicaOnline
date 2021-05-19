import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidaComponent } from './paginas/bienvenida/bienvenida.component';
import { HomeComponent } from './paginas/home/home.component';
import { LoginComponent } from './paginas/login/login.component';
import { PaginaNoEncontradaComponent } from './paginas/pagina-no-encontrada/pagina-no-encontrada.component';
import { RegistroComponent } from './paginas/registro/registro.component';

const routes: Routes = [

  {path:'',redirectTo:'bienvenida',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'bienvenida',component:BienvenidaComponent},
  {path:'registro',component:RegistroComponent},    
  {path:'login',component:LoginComponent},
  {path:'paginaNoEncontrada',component:PaginaNoEncontradaComponent},
  {path:'**',redirectTo:'paginaNoEncontrada',pathMatch:'full'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
