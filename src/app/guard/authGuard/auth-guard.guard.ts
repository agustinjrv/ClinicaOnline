import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/servicios/auth/auth.service';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {

  public constructor(private router:Router,private authService:AuthService)
  {
      
  }



  

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.ChequearUsuario();
  }

  public ChequearUsuario()
  {
    return this.authService.firebaseAuth.authState.pipe(
      map(user => {
        if (!user) {

          this.router.navigate(['/login']);

          return false;
        }
        return true;
      })
    );
  }
  
}
