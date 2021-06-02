import { Directive ,ElementRef,HostListener} from '@angular/core';

@Directive({
  selector: '[appOcultar]'
})
export class OcultarDirective {

  constructor(private elemento:ElementRef) { }


  @HostListener('mouseleave')onMouseLeave(){
    $('.btn-flotante').removeClass('animacionVer');
  }
  
}
