import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EsEspecialistaGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.EsEspecialista();
  }

  public EsEspecialista()
  {
    let retorno=false;
    let usuarioLogeado=JSON.parse( localStorage.getItem('usuarioLogeado'));

    if(usuarioLogeado.perfil=='Especialista')
    {
      retorno=true;
    }

    return retorno;
  }
  
  
}
