import { Component } from '@angular/core';
import { AuthService } from './servicios/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ClinicaOnline';
  public usuarioLogeado;

  public constructor(private servicioAuth:AuthService){
    this.usuarioLogeado=localStorage.getItem('usuarioLogeado');
  }

  LogOut()
  {
    this.servicioAuth.LogOutCurrentUser();
    localStorage.setItem('usuarioLogeado','');
    location.href="/login";
  }


}
