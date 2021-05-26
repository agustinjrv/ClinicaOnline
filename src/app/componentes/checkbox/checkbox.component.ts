import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {

  @Input() valorTrue:any=true;
  @Input() valorFalse:any=false;
  @Input() valorInicial=false;
  @Input() contenido='';
  @Output() valorRetorno:EventEmitter<any>=new EventEmitter<any>();
  public ultimoValor=false;
  public clase='btn btn-danger rounded-circle';

  



  constructor() { }

  ngOnInit(): void {
  }

  CambiarClase()
  {
    let retorno=this.ultimoValor;




  }


  CambiarValor(){
    let retorno;

    if(!this.ultimoValor)
    {
      retorno=this.valorTrue;
      this.clase='btn btn-success rounded-circle';
      
    }
    else{
      retorno=this.valorFalse;
      this.clase='btn btn-danger rounded-circle';
    }
    this.ultimoValor=retorno;

    this.valorRetorno.emit(retorno);
  }
}
