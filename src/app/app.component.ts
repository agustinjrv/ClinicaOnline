import { Component } from '@angular/core';
import { AuthService } from './servicios/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ClinicaOnline';
  public usuarioLogeado:any={};

  public constructor(private servicioAuth:AuthService){
    this.usuarioLogeado.correo='';
    this.usuarioLogeado.perfil='';
    let aux= localStorage.getItem('usuarioLogeado');
    
    try {
      this.usuarioLogeado =JSON.parse(aux);  
    } catch (error) {
      
    }
    
    
  }

  LogOut()
  {
    this.servicioAuth.LogOutCurrentUser();
    localStorage.setItem('usuarioLogeado','');
    location.href="/login";
  }


}
