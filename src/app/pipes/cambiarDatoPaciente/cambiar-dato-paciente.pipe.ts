import { Pipe, PipeTransform } from '@angular/core';
import { Paciente } from 'src/app/clases/paciente/paciente';

@Pipe({
  name: 'cambiarDatoPaciente'
})
export class CambiarDatoPacientePipe implements PipeTransform {

  public listaDePacientes:Paciente[]=[];

  transform(value: string, ...listaDePacientes: Paciente[]): string {
    let retorno:string='';

    for(let i=0;i<=listaDePacientes.length;i++)
    {
      if(listaDePacientes[0][i].correo!= undefined)
      {
        if(listaDePacientes[0][i].correo==value)
       {
         retorno=listaDePacientes[0][i].apellido +' '+ listaDePacientes[0][i].nombre ;
         break;
       }
      }
       
    }
    //console.log(retorno);
    return retorno;
  }

}
