import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { HomeComponent } from './paginas/home/home.component';
import { PaginaNoEncontradaComponent } from './paginas/pagina-no-encontrada/pagina-no-encontrada.component';
import { SeccionUsuariosModule } from './paginas/seccion-usuarios/seccion-usuarios.module';
import { BienvenidaModule } from './paginas/bienvenida/bienvenida.module';


  



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PaginaNoEncontradaComponent,
    
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    SeccionUsuariosModule,
    BienvenidaModule,
    
    
  ],  
  providers: [],  
  bootstrap: [AppComponent]
})
export class AppModule { }
