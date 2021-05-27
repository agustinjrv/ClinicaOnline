import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MiPerfilComponent } from './mi-perfil/mi-perfil.component';
import { PacienteComponent } from './paciente.component';
import { SolicitarTurnoComponent } from './solicitar-turno/solicitar-turno.component';

const routes: Routes = [
                        { path: '', component: PacienteComponent },
                        { path:'miPerfil', component: MiPerfilComponent},
                         {path:'solicitarTurno',component:SolicitarTurnoComponent}
                       ];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PacienteRoutingModule { }
