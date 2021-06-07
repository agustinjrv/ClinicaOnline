import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal-detalles',
  templateUrl: './modal-detalles.component.html',
  styleUrls: ['./modal-detalles.component.css']
})
export class ModalDetallesComponent implements OnInit {

  @Input() turnoDetalle;
  @Input() estadoTurno:string;
  @Output() calificarAtencion:EventEmitter<any>=new EventEmitter<any>();

  public claseBoton1='btn btn-success ';
  public claseBoton2='btn btn-danger';
  public claseBoton3='btn btn-danger';
  public claseBoton4='btn btn-danger';
  public claseBoton5='btn btn-danger';

  public imagen1='assets/Calificar/estrellaLlena.png';
  public imagen2='assets/Calificar/estrellaVacia.png';
  public imagen3='assets/Calificar/estrellaVacia.png';
  public imagen4='assets/Calificar/estrellaVacia.png';
  public imagen5='assets/Calificar/estrellaVacia.png';

  public calificacion:number;
  public comentarios:string='';
  


  constructor() { }

  ngOnInit(): void {
  }

  public SeleccionarHorario(numeroBoton:number)
  {
      switch(numeroBoton)
      {
        case 1:
              this.claseBoton1='btn btn-success';
              this.claseBoton2='btn btn-danger';
              this.claseBoton3='btn btn-danger';
              this.claseBoton4='btn btn-danger';
              this.claseBoton5='btn btn-danger';

              this.imagen1='assets/Calificar/estrellaLlena.png';
              this.imagen2='assets/Calificar/estrellaVacia.png';
              this.imagen3='assets/Calificar/estrellaVacia.png';
              this.imagen4='assets/Calificar/estrellaVacia.png';
              this.imagen5='assets/Calificar/estrellaVacia.png';

              this.calificacion=1;

          
              
          break;
        case 2:
              this.claseBoton1='btn btn-success';
              this.claseBoton2='btn btn-success';
              this.claseBoton3='btn btn-danger';
              this.claseBoton4='btn btn-danger';
              this.claseBoton5='btn btn-danger';

              this.imagen1='assets/Calificar/estrellaLlena.png';
              this.imagen2='assets/Calificar/estrellaLlena.png';
              this.imagen3='assets/Calificar/estrellaVacia.png';
              this.imagen4='assets/Calificar/estrellaVacia.png';
              this.imagen5='assets/Calificar/estrellaVacia.png';
              this.calificacion=2;
          break;
          case 3:
              this.claseBoton1='btn btn-success';
              this.claseBoton2='btn btn-success';
              this.claseBoton3='btn btn-success';
              this.claseBoton4='btn btn-danger';
              this.claseBoton5='btn btn-danger';

              this.imagen1='assets/Calificar/estrellaLlena.png';
              this.imagen2='assets/Calificar/estrellaLlena.png';
              this.imagen3='assets/Calificar/estrellaLlena.png';
              this.imagen4='assets/Calificar/estrellaVacia.png';
              this.imagen5='assets/Calificar/estrellaVacia.png';

              this.calificacion=3;
          break;
          case 4:
              this.claseBoton1='btn btn-success';
              this.claseBoton2='btn btn-success';
              this.claseBoton3='btn btn-success';
              this.claseBoton4='btn btn-success';
              this.claseBoton5='btn btn-danger';


            this.imagen1='assets/Calificar/estrellaLlena.png';
            this.imagen2='assets/Calificar/estrellaLlena.png';
            this.imagen3='assets/Calificar/estrellaLlena.png';
            this.imagen4='assets/Calificar/estrellaLlena.png';
            this.imagen5='assets/Calificar/estrellaVacia.png';

            this.calificacion=4;
          break;
          case 5:
            this.claseBoton1='btn btn-success';
            this.claseBoton2='btn btn-success';
            this.claseBoton3='btn btn-success';
            this.claseBoton4='btn btn-success';
            this.claseBoton5='btn btn-success';

            this.imagen1='assets/Calificar/estrellaLlena.png';
            this.imagen2='assets/Calificar/estrellaLlena.png';
            this.imagen3='assets/Calificar/estrellaLlena.png';
            this.imagen4='assets/Calificar/estrellaLlena.png';
            this.imagen5='assets/Calificar/estrellaLlena.png';

            this.calificacion=5;
        break;

      }

  }

  public CalificarAtencion()
  { 
     let retorno:any={};
     retorno.comentarios=this.comentarios;
     retorno.calificacion=this.calificacion;
     this.calificarAtencion.emit(retorno);
  }

}
