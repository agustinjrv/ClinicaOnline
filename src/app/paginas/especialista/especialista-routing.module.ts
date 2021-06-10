import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EspecialistaComponent } from './especialista.component';
import { MiPerfilComponent } from './mi-perfil/mi-perfil.component';
import { PacientesComponent } from './pacientes/pacientes.component';
import { TurnosComponent } from './turnos/turnos.component';

const routes: Routes = [
                          { path:'', component: EspecialistaComponent },
                          { path:'miPerfil', component: MiPerfilComponent},
                          { path:'turnos', component: TurnosComponent},
                          { path:'pacientes', component: PacientesComponent},

                       ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EspecialistaRoutingModule { }

