import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministradorComponent } from './administrador.component';
import { GraficosComponent } from './graficos/graficos.component';
import { MiPerfilComponent } from './mi-perfil/mi-perfil.component';
import { GenerarUsuarioComponent } from './seccion-usuarios/generar-usuario/generar-usuario.component';
import { RegistroAdministradoresComponent } from './seccion-usuarios/generar-usuario/registro-administradores/registro-administradores.component';
import { RegistroEspecialistasComponent } from './seccion-usuarios/generar-usuario/registro-especialistas/registro-especialistas.component';
import { RegistroPacientesComponent } from './seccion-usuarios/generar-usuario/registro-pacientes/registro-pacientes.component';
import { ListaUsuariosComponent } from './seccion-usuarios/lista-usuarios/lista-usuarios.component';
import { SeccionUsuariosComponent } from './seccion-usuarios/seccion-usuarios.component';
import { SolicitudesComponent } from './seccion-usuarios/solicitudes/solicitudes.component';
import { SolicitarTurnoComponent } from './solicitar-turno/solicitar-turno.component';
import { TurnosComponent } from './turnos/turnos.component';

const routes: Routes = [
                          {path:'', component: AdministradorComponent},
                          {path:'miPerfil', component: MiPerfilComponent},
                          {path:'solicitarTurno', component:SolicitarTurnoComponent},
                          {path:'turnos', component:TurnosComponent},
                          {path:'graficos', component:GraficosComponent},
                          {path:'seccionUsuarios',
                          children:[
                            {path:'',component:SeccionUsuariosComponent},
                            {path:'lista',component:ListaUsuariosComponent},
                            {path:'solicitudes',component:SolicitudesComponent},
                            {path:'registro',
                              children:[
                                  {path:'',component:GenerarUsuarioComponent},
                                  {path:'pacientes',component:RegistroPacientesComponent},
                                  {path:'especialistas',component:RegistroEspecialistasComponent},            
                                  {path:'administradores',component:RegistroAdministradoresComponent}      
                              ]}, 
                          ]},
                          
                        ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministradorRoutingModule { }
