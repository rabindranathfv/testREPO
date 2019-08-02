import { Directive, HostListener, Input, Renderer, ElementRef, ViewContainerRef, OnInit, Renderer2} from '@angular/core';




@Directive({
  selector: '[hover]'
})
export class HoverDirective {


    @Input()
    hoverClass:string;
    
    constructor(
        public elementRef: ElementRef,
        private renderer: Renderer,
        private container: ViewContainerRef

        ) {
        }

        @HostListener('mouseover',['$event']) mouseover() {
            this.renderer.setElementClass(this.elementRef.nativeElement, this.hoverClass, true);
          }
        
        @HostListener('mouseout', ['$event']) mouseout() {
            this.renderer.setElementClass(this.elementRef.nativeElement, this.hoverClass, false);
          }
    }

    @Directive({
      selector: '[sizeCard]'
    })
    export class SizeCard implements OnInit {
    
        @Input()
        zoom:any;
        // public className:string;
    
        constructor(
            public hostElement: ElementRef,
            public renderer: Renderer2,
            private container: ViewContainerRef
    
            ) {
            }
    
          ngOnInit(){
    
            switch (this.zoom){
    
             case(1):{
               this.renderer.addClass(this.hostElement.nativeElement, 'card-grow-default');
               break;
            }
             case(2):{
               this.renderer.addClass(this.hostElement.nativeElement, 'card-grow-zoom-2');
               break;
            }
             case(3):{
               this.renderer.addClass(this.hostElement.nativeElement, 'card-grow-zoom-3');
               break;
            }
             case(4):{
               this.renderer.addClass(this.hostElement.nativeElement, 'card-grow-zoom-4');
               break;
            }
            
    
            }
    
          } 
        }
