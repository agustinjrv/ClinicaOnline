import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidaComponent } from './bienvenida.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
                         {path: '', component: BienvenidaComponent},                           
                         {path:'login',component:LoginComponent},
                         {path:'registro',component:RegistroComponent},                                    
                       ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BienvenidaRoutingModule { }
