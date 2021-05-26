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





@NgModule({
  declarations: [
    BienvenidaComponent,
    LoginComponent,
    RegistroComponent,
    RegistroPacientesComponent,
    RegistroEspecialistasComponent
    
    
    
  ],
  imports: [
    AutocompleteLibModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,  
    BienvenidaRoutingModule,
    
     
    
  ]
})
export class BienvenidaModule { }
