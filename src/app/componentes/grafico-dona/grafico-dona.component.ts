import { EestadoTurno } from './../../clases/turno/turno';
import { Component, Input, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';
import { TurnosService } from 'src/app/servicios/turnos/turnos.service';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styleUrls: ['./grafico-dona.component.css']
})
export class GraficoDonaComponent implements OnInit {
   

   public listaTurnos:any[]=[];
   public doughnutChartLabels: Label[] = [];
   public doughnutChartData: number[] = [];
   public listaEstadosTurnos:any[]=[];
   public cargo=false;
   public doughnutChartType: ChartType = 'doughnut';
 
   constructor(private servicioTurnos:TurnosService) { }
 
   ngOnInit(): void {
    this.servicioTurnos.TraerTodos().valueChanges().subscribe((data)=>{
      this.listaTurnos=data;
            
      let listaEstadosTurnosAux=this.listaTurnos.map((value,index,array)=>{
          return value.estadoTurno;
      });

      

      let listaPendientes:any[]=[];
      let listaRechazado:any[]=[];
      let listaAceptado:any[]=[];
      let listaCancelado:any[]=[];
      let listaFinalizado:any[]=[];

      listaEstadosTurnosAux.forEach((value,index,array)=>{
      
          switch (value) {

            case EestadoTurno.pendiente:  
                listaPendientes.push(value);
              break;
            case EestadoTurno.rechazado:  
                listaRechazado.push(value);
              break;
            case EestadoTurno.aceptado:  
                listaAceptado.push(value);
              break;
            case  EestadoTurno.cancelado:  
                listaCancelado.push(value);
              break;
            case   EestadoTurno.finalizado:  
                listaFinalizado.push(value);
              break;            
          }
      });

      this.listaEstadosTurnos.push(listaPendientes);
      this.listaEstadosTurnos.push(listaRechazado);
      this.listaEstadosTurnos.push(listaAceptado);
      this.listaEstadosTurnos.push(listaCancelado);
      this.listaEstadosTurnos.push(listaFinalizado);
      this.doughnutChartLabels.push(EestadoTurno[EestadoTurno.pendiente]);
      this.doughnutChartLabels.push(EestadoTurno[EestadoTurno.rechazado]);
      this.doughnutChartLabels.push(EestadoTurno[EestadoTurno.aceptado]);
      this.doughnutChartLabels.push(EestadoTurno[EestadoTurno.cancelado]);
      this.doughnutChartLabels.push(EestadoTurno[EestadoTurno.finalizado]);
      this.doughnutChartData.push(listaPendientes.length);
      this.doughnutChartData.push(listaRechazado.length);
      this.doughnutChartData.push(listaAceptado.length);
      this.doughnutChartData.push(listaCancelado.length);
      this.doughnutChartData.push(listaFinalizado.length);
      this.cargo=true;

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
