import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ComponentFactoryResolver,
  HostBinding
} from '@angular/core';
import { ContenedorDirective } from './contenedor.directive';

@Component({
  selector: 'app-drawer',
  templateUrl: './contenedor-componentes.component.html',
  /* styles: [
    `:host{
      height: 100%; width: 100%;
    }`
  ] */
})
export class ContenedorComponentesComponent implements OnInit {

  @Input() height = 'auto';
  @Input() width = 'auto';
  @Input() styles;
  @Input() component;
  @Input() params;
  @Input() text;
  @ViewChild( ContenedorDirective ) contenedor: ContenedorDirective;

  @HostBinding('style.height') cheight;
  @HostBinding('style.width') cwidth;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  ngOnInit() {

    
    if (this.component) {
      this.loadComponent(this.component, this.params);
    }
  }

  loadComponent( templateComponent, params) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(templateComponent);
    const viewContainerRef = this.contenedor.viewContainerRef;
    // console.log(viewContainerRef);
    this.contenedor.viewContainerRef.clear();
    const destino = viewContainerRef.createComponent(componentFactory);
    // console.log(destino)
    if (params) {
      Object.keys(params).forEach( key => {
        destino.instance[key] = params[key];
      });
    }
    this.cheight = this.height;
    this.cwidth = this.width;
  }
}
