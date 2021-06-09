import { Pipe, PipeTransform } from '@angular/core';
import { Especialista } from 'src/app/clases/especialista/especialista';


@Pipe({
  name: 'cambiarDatoPersonal'
})
export class CambiarDatoPersonalPipe implements PipeTransform {

  public listaDeEspecialistas:Especialista[]=[];

  transform(value: string, ...listaDeEspecialistas: Especialista[]): string {
    let retorno:string='';

    for(let i=0;i<=listaDeEspecialistas.length;i++)
    {
       if(listaDeEspecialistas[0][i].correo==value)
       {
         retorno=listaDeEspecialistas[0][i].apellido +' '+ listaDeEspecialistas[0][i].nombre ;
         break;
       }
    }
    //console.log(retorno);
    return retorno;
  }

}
