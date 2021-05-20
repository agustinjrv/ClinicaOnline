import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './paginas/login/login.component';
import { RegistroComponent } from './paginas/registro/registro.component';
import { BienvenidaComponent } from './paginas/bienvenida/bienvenida.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { RegistroPacientesComponent } from './paginas/registro/registro-pacientes/registro-pacientes.component';
import { RegistoEspecialistasComponent } from './paginas/registro/registo-especialistas/registo-especialistas.component';
import { HomeComponent } from './paginas/home/home.component';
import { PaginaNoEncontradaComponent } from './paginas/pagina-no-encontrada/pagina-no-encontrada.component';
import { SeccionUsuariosComponent } from './paginas/seccion-usuarios/seccion-usuarios.component';
import { SolicitudesComponent } from './paginas/seccion-usuarios/solicitudes/solicitudes.component';
import { GenerarUsuarioComponent } from './paginas/seccion-usuarios/generar-usuario/generar-usuario.component';
import { ListaUsuariosComponent } from './paginas/seccion-usuarios/lista-usuarios/lista-usuarios.component';
import { RegistroAdministradoresComponent } from './paginas/registro/registro-administradores/registro-administradores.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    BienvenidaComponent,
    RegistroPacientesComponent,
    RegistoEspecialistasComponent,
    HomeComponent,
    PaginaNoEncontradaComponent,
    SeccionUsuariosComponent,
    SolicitudesComponent,
    GenerarUsuarioComponent,
    ListaUsuariosComponent,
    RegistroAdministradoresComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
