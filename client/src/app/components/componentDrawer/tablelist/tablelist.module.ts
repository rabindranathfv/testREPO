import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatPaginatorModule,
  MatSortModule,
  MatTableModule,
  MatToolbarModule,
  MatMenuModule,
  MatInputModule,
  MatButtonModule,

} from '@angular/material';
import { TablelistComponent } from './tablelist.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ContenedorComponentesModule } from '../../contenedor-componentes/contenedor-componentes.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatToolbarModule,
    ScrollingModule,
    ContenedorComponentesModule,
    FormsModule,
    MatMenuModule,
    MatInputModule,
    MatButtonModule
  ],
  declarations: [TablelistComponent],
  exports: [ TablelistComponent ],
  entryComponents: [ TablelistComponent ]
})
export class TablelistModule { }
