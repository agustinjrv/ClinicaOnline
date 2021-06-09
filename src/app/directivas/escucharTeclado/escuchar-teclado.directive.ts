import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appEscucharTeclado]'
})
export class EscucharTecladoDirective {

  constructor(private elemento: ElementRef) {
  }

  @HostListener('keydown', ['$event']) onKeyDown(event: KeyboardEvent) {


    if (this.elemento.nativeElement.id == "textEspecialidad") {
      var objO: any = document.getElementById("btnEspecialidad") ?? "";
      objO.click();
    } else {
      var objO: any = document.getElementById("btnEspecialista") ?? "";
      objO.click();
    }


  }

}
