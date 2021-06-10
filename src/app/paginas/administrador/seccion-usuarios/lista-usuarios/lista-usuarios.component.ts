import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/usuario/usuario.service';
import { Administrador } from 'src/app/clases/administrador/administrador';
import { Especialista } from 'src/app/clases/especialista/especialista';
import { Paciente } from 'src/app/clases/paciente/paciente';
import * as fs from 'file-saver';
import { Workbook } from 'exceljs';


@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  public mostrar:string;
  public listaUsuarios:any[]=[];
  public listaAdministradores:Administrador[]=[];
  public listaEspecialistas:Especialista[]=[];
  public listaPacientes:Paciente[]=[];
  public mostrarSpinner=true;

  constructor(private servicioUsuarios:UsuarioService) { 


    this.servicioUsuarios.TraerTodos().valueChanges().subscribe((data)=>{
      this.listaUsuarios=data;
      this.CargarListas();
    });
    
  }
  
  ngOnInit(): void {
  
  }

  public CargarListas()
  {
    
    this.listaUsuarios.forEach(element => {
        
      switch(element.perfil)
      {
        case 'Administrador':
          this.listaAdministradores.push(element);
          break;
        case 'Especialista':
          if(element.estadoCuenta)
          this.listaEspecialistas.push(element);
          break;
        case 'Paciente':
          this.listaPacientes.push(element);
          break;
      }
    });
    setTimeout(()=>{
      this.mostrarSpinner=false;
      this.mostrar='Administradores';
    },500);
    
    
  }

  GenerarExcel() {
    //Creo el libro de excel
    let workbook = new Workbook();

    //Creo la hoja de excel
    let worksheet = workbook.addWorksheet("Listado de Usuarios");

    //Agrego los titulos de la hoja
    let header = ["Nombre", "Apellido", "Edad", "DNI", "Correo", "Perfil"];
    let headerRow = worksheet.addRow(header);

    for (let item of this.listaUsuarios) {
      let aux = [item.nombre ,  item.apellido , item.edad , item.dni , item.correo , item.perfil ];

      worksheet.addRow(aux);
    }

    let fname = "Listado de Usuarios";

    //add data and file name and download
    workbook.xlsx.writeBuffer().then((data) => {
      let blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      fs.saveAs(blob, fname + '.xlsx');
    });
  }

}
