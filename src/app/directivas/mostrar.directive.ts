import { Directive ,ElementRef,HostListener} from '@angular/core';

@Directive({
  selector: '[appMostrar]'
})
export class MostrarDirective {

  constructor(private elemento:ElementRef) 
  { 
    
  }

  @HostListener('mouseenter')onMouseEnter(){
    $('.btn-flotante').addClass('animacionVer');
  }



}
