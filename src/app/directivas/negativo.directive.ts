import { Directive,TemplateRef,ViewContainerRef,Input } from '@angular/core';


@Directive({
  selector: '[appNegativo]'
})
export class NegativoDirective {



  constructor(private template:TemplateRef<any>,
              private view:ViewContainerRef) 
  { 
    
  }

  @Input()set appNegativo(condicion:boolean){
    if(condicion==true){
      this.view.clear();
    }
    else{
      this.view.createEmbeddedView(this.template);
    }
  }

}
