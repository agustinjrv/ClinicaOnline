import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidaComponent } from './bienvenida.component';
import { LoginComponent } from './login/login.component';
import { RegistroEspecialistasComponent } from './registro/registro-especialistas/registro-especialistas.component';
import { RegistroPacientesComponent } from './registro/registro-pacientes/registro-pacientes.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
                         {path: '', component: BienvenidaComponent},                           
                         {path:'login',component:LoginComponent},
                         {path:'registro',
                          children:
                          [
                            {path:'',component:RegistroComponent},
                            {path:'paciente',component:RegistroPacientesComponent},
                            {path:'especialista',component:RegistroEspecialistasComponent}
                          ] 
                        },                                    
                       ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BienvenidaRoutingModule { }
