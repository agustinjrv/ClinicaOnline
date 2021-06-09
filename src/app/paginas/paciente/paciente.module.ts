import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PacienteRoutingModule } from './paciente-routing.module';
import { PacienteComponent } from './paciente.component';
import { MisTurnosComponent } from './mis-turnos/mis-turnos.component';

import { SolicitarTurnoComponent } from './solicitar-turno/solicitar-turno.component';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { MiPerfilComponent } from './mi-perfil/mi-perfil.component';
import { TablaEspecialidadesComponent } from './tabla-especialidades/tabla-especialidades.component';
import { ModalCancelarTurnoComponent } from 'src/app/componentes/modal-cancelar-turno/modal-cancelar-turno.component';
import { PdfMakeWrapper } from 'pdfmake-wrapper';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { ModalEncuestaComponent } from './modal-encuesta/modal-encuesta.component';
import { ModalDetallesComponent } from './modal-detalles/modal-detalles.component';
import { FormsModule } from '@angular/forms';
import { EscucharTecladoDirective } from 'src/app/directivas/escucharTeclado/escuchar-teclado.directive';
import { PrimeraLetraMayusculaPipe } from 'src/app/pipes/primera-letra-mayuscula/primera-letra-mayuscula.pipe';
import { CambiarDatoPersonalPipe } from 'src/app/pipes/cambiarDatoPersonal/cambiar-dato-personal.pipe';



PdfMakeWrapper.setFonts(pdfFonts);

@NgModule({
  declarations: [
    PacienteComponent,
    MisTurnosComponent,
    SolicitarTurnoComponent,
    MiPerfilComponent,
    TablaEspecialidadesComponent,
    ModalCancelarTurnoComponent,
    ModalEncuestaComponent,
    ModalDetallesComponent,
    EscucharTecladoDirective,
    PrimeraLetraMayusculaPipe,
    CambiarDatoPersonalPipe
    
  ],
  imports: [
    CommonModule,
    PacienteRoutingModule,
    AutocompleteLibModule,
    FormsModule,
    

  ]
})
export class PacienteModule { }
