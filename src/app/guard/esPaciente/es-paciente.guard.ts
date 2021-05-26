import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EsPacienteGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.EsPaciente();
  }

  public EsPaciente()
  {
    let retorno=false;
    let usuarioLogeado=JSON.parse( localStorage.getItem('usuarioLogeado'));

    if(usuarioLogeado.perfil=='Paciente')
    {
      retorno=true;
    }

    return retorno;
  }

  
  
}
