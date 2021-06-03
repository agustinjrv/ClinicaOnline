import { Component, OnInit } from '@angular/core';
import { Columns, PdfMakeWrapper, Table, Txt } from 'pdfmake-wrapper';
import { Paciente } from 'src/app/clases/paciente/paciente';
import { Usuario } from 'src/app/clases/usuario/usuario';
import { HistoriaClinicaService } from 'src/app/servicios/historiaClinica/historia-clinica.service';
import { UsuarioService } from 'src/app/servicios/usuario/usuario.service';

@Component({
  selector: 'app-mi-perfil',
  templateUrl: './mi-perfil.component.html',
  styleUrls: ['./mi-perfil.component.css']
})
export class MiPerfilComponent implements OnInit {

  public listaPacientes:Paciente[]=[];
  public datosUsuario:any=false;
  public usuarioLogeado=JSON.parse(localStorage.getItem('usuarioLogeado'));
  public listaHistoriaClinica:any[]=[];
  public cargo=false;

  constructor( private servicioUsuario:UsuarioService,
               private servicioHistoriaClinica:HistoriaClinicaService) { 

  }

  ngOnInit(): void {
    this.CargarUsuario();
    this.CargarHistoria();
    
  }

  private CargarUsuario()
  {

    this.servicioUsuario.TraerTodos().valueChanges().subscribe((data:Usuario[])=>{
        for(let i=0;i<data.length;i++)
        {
          if(data[i].correo==this.usuarioLogeado.correo)
          {
              this.datosUsuario=data[i];
              break;
          }
        }  
    });
    
  }

  private CargarHistoria(){
    this.servicioHistoriaClinica.BuscarUnaHistoriaPorCorreo(this.usuarioLogeado.correo).valueChanges().subscribe((data:any)=>{
        this.listaHistoriaClinica=data;
        console.log(data[0].datosDinamicos[0].valor);
        this.cargo=true;
    });

  }

  public GenerarPDF()
  {
      
      const pdf= new PdfMakeWrapper();

      pdf.add(new Txt('Historia clinica de Paciente: ' + this.datosUsuario.apellido + " " + this.datosUsuario.nombre  ).style('algin="center"').end)

      
      let tabla:any[]=[];
      tabla.push(['Fecha','CorreoEspecialista','Altura','Peso','Temperatura','Presion']);

      this.listaHistoriaClinica.forEach(unaHistoria => {
        let fila:any[]=[];
        fila.push(unaHistoria.fecha);
        fila.push(unaHistoria.correoEspecialista);
        fila.push(unaHistoria.altura);
        fila.push(unaHistoria.peso);
        fila.push(unaHistoria.temperatura);
        fila.push(unaHistoria.presion);
        tabla.push(fila);
      });//falta los datos adicionales

      pdf.add(new Table(tabla).end);
    
     

      pdf.create().open();
  }
      
        
      
}
