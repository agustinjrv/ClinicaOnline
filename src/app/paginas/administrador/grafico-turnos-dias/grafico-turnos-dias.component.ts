import { EDiasSemana } from './../../../clases/horario/horario';
import { Component, Input, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';
import { EestadoTurno, Turno } from 'src/app/clases/turno/turno';
import { TurnosService } from 'src/app/servicios/turnos/turnos.service';
@Component({
  selector: 'app-grafico-turnos-dias',
  templateUrl: './grafico-turnos-dias.component.html',
  styleUrls: ['./grafico-turnos-dias.component.css']
})
export class GraficoTurnosDiasComponent implements OnInit {
 

  public listaTurnos:any[]=[];
  public doughnutChartLabels: Label[] = [];
  public doughnutChartData: number[] = [];
  public listaDiasTurnos:any[]=[];
  public cargo2=false;
  public doughnutChartType: ChartType = 'doughnut';

  constructor(private servicioTurnos:TurnosService) { }

  ngOnInit(): void {
   this.servicioTurnos.TraerTodos().valueChanges().subscribe((data)=>{
     this.listaTurnos=data;
           
     let listaEstadosTurnosAux=this.listaTurnos.map((value,index,array)=>{

      let retorno:EDiasSemana;

          if(value.fecha.toLocaleLowerCase().includes('lunes'))
          {
            retorno=EDiasSemana.lunes;
          }
          if(value.fecha.toLocaleLowerCase().includes('martes'))
          {
            retorno=EDiasSemana.martes;
          }
          if(value.fecha.toLocaleLowerCase().includes('miercoles'))
          {
            retorno=EDiasSemana.miercoles;
          }
          if(value.fecha.toLocaleLowerCase().includes('jueves'))
          {
            retorno=EDiasSemana.jueves;
          }
          if(value.fecha.toLocaleLowerCase().includes('viernes'))
          {
            retorno=EDiasSemana.viernes;
          }
          if(value.fecha.toLocaleLowerCase().includes('sabado'))
          {
            retorno=EDiasSemana.sabado;
          }

         return retorno;
     });

     
      let listaLunes:any[]=[];
      let listaMartes:any[]=[];
      let listaMiercoles:any[]=[];
      let listaJueves:any[]=[];
      let listaViernes:any[]=[];
      let listaSabado:any[]=[];

     listaEstadosTurnosAux.forEach((value,index,array)=>{
     
         switch (value) {

           case EDiasSemana.lunes:  
                listaLunes.push(value);
             break;
           case EDiasSemana.martes:  
                listaMartes.push(value);
             break;
           case EDiasSemana.miercoles:  
                listaMiercoles.push(value);
             break;
           case EDiasSemana.jueves:  
                listaJueves.push(value);
             break;
           case EDiasSemana.viernes:  
                listaViernes.push(value);
             break;
           case EDiasSemana.sabado:  
                listaSabado.push(value);
             break;

           
         }
     });

     this.listaDiasTurnos.push(listaLunes);
     this.listaDiasTurnos.push(listaMartes);
     this.listaDiasTurnos.push(listaMiercoles);
     this.listaDiasTurnos.push(listaJueves);
     this.listaDiasTurnos.push(listaViernes);
     this.listaDiasTurnos.push(listaSabado);
     this.doughnutChartLabels.push(EDiasSemana[EDiasSemana.lunes]);
     this.doughnutChartLabels.push(EDiasSemana[EDiasSemana.martes]);
     this.doughnutChartLabels.push(EDiasSemana[EDiasSemana.miercoles]);
     this.doughnutChartLabels.push(EDiasSemana[EDiasSemana.jueves]);
     this.doughnutChartLabels.push(EDiasSemana[EDiasSemana.viernes]);
     this.doughnutChartLabels.push(EDiasSemana[EDiasSemana.sabado]);
     
     this.doughnutChartData.push(listaLunes.length);
     this.doughnutChartData.push(listaMartes.length);
     this.doughnutChartData.push(listaMiercoles.length);
     this.doughnutChartData.push(listaJueves.length);
     this.doughnutChartData.push(listaViernes.length);
     this.doughnutChartData.push(listaSabado.length);
     this.cargo2=true;

   });


  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }
}
