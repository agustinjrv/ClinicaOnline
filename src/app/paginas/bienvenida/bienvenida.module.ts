import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BienvenidaRoutingModule } from './bienvenida-routing.module';
import { BienvenidaComponent } from './bienvenida.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistroPacientesComponent } from './registro/registro-pacientes/registro-pacientes.component';


import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { RegistroEspecialistasComponent } from './registro/registro-especialistas/registro-especialistas.component';

import { MostrarDirective } from 'src/app/directivas/mostrar.directive';
import { OcultarDirective } from 'src/app/directivas/Ocultar/ocultar.directive';
import { NgxCaptchaModule } from 'ngx-captcha';





@NgModule({
  declarations: [
    BienvenidaComponent,
    LoginComponent,
    RegistroComponent,
    RegistroPacientesComponent,
    RegistroEspecialistasComponent,
    MostrarDirective,
    OcultarDirective
    
    
    
  ],
  imports: [
    AutocompleteLibModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,  
    BienvenidaRoutingModule,
    NgxCaptchaModule
    
    
  ]
})
export class BienvenidaModule { }
