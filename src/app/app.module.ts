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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    BienvenidaComponent,
    
    RegistroComponent,
    RegistroPacientesComponent,
    RegistoEspecialistasComponent,
    HomeComponent,
    PaginaNoEncontradaComponent,
    
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
