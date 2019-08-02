import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './grid.component';
import { ContainerDirective } from './container.directive';
// import { DrawerComponent } from '../componentDrawer/drawer.component';

import {DragDropModule} from '@angular/cdk/drag-drop';
import { ContenedorComponentesModule } from '../contenedor-componentes/contenedor-componentes.module';
import { MatGridListModule } from '@angular/material';

const entryComponents = [
  // DrawerComponent
];
const declarations = [
  ...entryComponents,
  GridComponent,
  ContainerDirective
];
@NgModule({
  imports: [
    CommonModule,
    DragDropModule,
    ContenedorComponentesModule,
    MatGridListModule
  ],
  declarations: [...declarations],
  entryComponents: [...entryComponents],
  exports: [GridComponent]
})
export class GridModule { }
