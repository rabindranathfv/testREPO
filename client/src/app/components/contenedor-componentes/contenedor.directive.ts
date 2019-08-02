import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appContenedor]'
})
export class ContenedorDirective {

  constructor(public viewContainerRef: ViewContainerRef) {
    // console.log(this.viewContainerRef.element.nativeElement);
    // this.viewContainerRef.element.nativeElement.width='100%'
  }
}
