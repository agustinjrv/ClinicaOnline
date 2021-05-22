import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EsAdministradorGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.EsAdministrador();
  }


  public EsAdministrador()
  {
    let retorno=false;
    let usuarioLogeado=JSON.parse( localStorage.getItem('usuarioLogeado'));

    if(usuarioLogeado.perfil=='Administrador')
    {
      retorno=true;
    }

    return retorno;
  }
  
}
