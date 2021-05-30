import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MiPerfilComponent } from './mi-perfil/mi-perfil.component';
import { MisTurnosComponent } from './mis-turnos/mis-turnos.component';
import { PacienteComponent } from './paciente.component';
import { SolicitarTurnoComponent } from './solicitar-turno/solicitar-turno.component';

const routes: Routes = [
                        { path: '', component: PacienteComponent },
                        { path:'miPerfil', component: MiPerfilComponent},
                        { path:'solicitarTurno',component:SolicitarTurnoComponent},
                        { path:'misTurnos',component:MisTurnosComponent}
                       ];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PacienteRoutingModule { }
