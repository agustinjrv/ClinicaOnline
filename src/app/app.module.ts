import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';

import { PaginaNoEncontradaComponent } from './paginas/pagina-no-encontrada/pagina-no-encontrada.component';
import { BienvenidaModule } from './paginas/bienvenida/bienvenida.module';
import { AdministradorModule } from './paginas/administrador/administrador.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RadioButtonComponent } from './componentes/radio-button/radio-button.component';






  



@NgModule({
  declarations: [
    AppComponent,
    PaginaNoEncontradaComponent,
    RadioButtonComponent,
    
    
    
    
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BienvenidaModule,
    AdministradorModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
    
    
  ],  
  providers: [],  
  bootstrap: [AppComponent]
})
export class AppModule { }
