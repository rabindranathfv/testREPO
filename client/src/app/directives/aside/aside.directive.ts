import { Directive, HostListener, ElementRef, Input, ViewChild, asNativeElements } from '@angular/core';

/**
* Allows the aside to be toggled via click.
*/
@Directive({
  selector: '[asideTrigger]',
})
export class AsideToggleDirective {
    
  @Input() asideOpen: boolean;
  constructor( private element: ElementRef ) {
   }

  @HostListener('click', ['$event'])
  @ViewChild('')
  toggleOpen( $event: any) {
    
    console.log(this.asideOpen)

    if(this.asideOpen){

      document.querySelector('#mainContent').classList.remove('main-content');
      document.querySelector('#mainContent').classList.add('main-content-aside');
      
      document.querySelector('#asideComponent').classList.remove('aside-hidden');
      document.querySelector('#asideComponent').classList.add('aside-visible');

    }
    else{

      document.querySelector('#mainContent').classList.remove('main-content-aside');
      document.querySelector('#mainContent').classList.add('main-content');
      
      document.querySelector('#asideComponent').classList.remove('aside-visible');
      document.querySelector('#asideComponent').classList.add('aside-hidden');
    }

  }
}

/* Llamar funciones de dfirectivas desde componentes según estado */