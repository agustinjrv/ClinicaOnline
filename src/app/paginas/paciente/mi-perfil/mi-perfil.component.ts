import { Component, OnInit } from '@angular/core';
import { Columns, Img, PdfMakeWrapper, Table, Txt } from 'pdfmake-wrapper';
import { Especialista } from 'src/app/clases/especialista/especialista';
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
  public listaEspecialistas:Especialista[]=[];
  public historiaSeleccionada:any=false;

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

        this.listaEspecialistas=(<Especialista[]>data).filter((value,index,array)=>{
          return value.perfil=='Especialista'
        })
    });
    
  }

  private CargarHistoria(){
    this.servicioHistoriaClinica.BuscarUnaHistoriaPorCorreo(this.usuarioLogeado.correo).valueChanges().subscribe((data:any)=>{
        this.listaHistoriaClinica=data;
        console.log(this.listaHistoriaClinica);
        this.cargo=true;
    });

  }

  public async GenerarPDF()
  {
      
      const pdf= new PdfMakeWrapper();

      pdf.images({
        logoEmpresa: await new Img('assets/icono.svg').build(),        
     });

      pdf.add(new Txt('Clinica Espora').fontSize(40).alignment('center') .end);  
      pdf.add(await new Img('logoEmpresa',true).width(50).absolutePosition(125,30).build());
      
      


      pdf.add(new Txt('Historia clinica de Paciente: ' + this.datosUsuario.apellido + " " + this.datosUsuario.nombre  ).fontSize(20).alignment('center').end);

      
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
