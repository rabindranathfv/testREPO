import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContenedorComponentesComponent } from './contenedor-componentes.component';
import { ContenedorDirective } from './contenedor.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ContenedorComponentesComponent,
    ContenedorDirective
  ],
  entryComponents: [ContenedorComponentesComponent],
  exports: [ContenedorComponentesComponent]
})
export class ContenedorComponentesModule { }
