import { Directive ,ElementRef,HostListener} from '@angular/core';

@Directive({
  selector: '[appResaltar]'
})

export class ResaltarDirective {

  constructor(private elemento:ElementRef) 
  { 
    this.elemento.nativeElement.style.backgroundColor ='red';
  }

  @HostListener('mouseenter')onMouseEnter(){
    console.log('entro en mouseEnter');
    
    this.CambiarEstilo('blue');
  }

  @HostListener('mouseleave')onMouseLeave(){
    console.log('entro en mouseLeave');
    this.CambiarEstilo('white');
    

  }

  @HostListener('window:keydown',['$event'])onKeyDown(event : KeyboardEvent){
    console.info('evento',event)
  }

  private CambiarEstilo(color : string){
    this.elemento.nativeElement.style.backgroundColor=color;
  }



}
