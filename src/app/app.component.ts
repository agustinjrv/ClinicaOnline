import { Component } from '@angular/core';
import { AuthService } from './servicios/auth/auth.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public usuarioLogeado:any={};
 

  public constructor(private servicioAuth:AuthService){

    this.usuarioLogeado={};
    this.usuarioLogeado.correo='';
    this.usuarioLogeado.perfil='';
    
    try {
      let aux= localStorage.getItem('usuarioLogeado');
      this.usuarioLogeado =JSON.parse(aux);  
      
      if(this.usuarioLogeado==null)
      {
        this.usuarioLogeado={};
        this.usuarioLogeado.correo='';
        this.usuarioLogeado.perfil='';
      }
    } catch (error) {
    
    }
    
    
  }

  

  LogOut()
  {
    this.servicioAuth.LogOutCurrentUser();
    localStorage.setItem('usuarioLogeado','');
    location.href="bienvenida/login";
  }


}
