import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogVComponent } from './dialog-v.component';
import { MatDialogModule } from '@angular/material';
import { ContenedorComponentesModule } from '../contenedor-componentes/contenedor-componentes.module';

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    ContenedorComponentesModule
  ],
  declarations: [DialogVComponent],
  exports: [DialogVComponent],
  entryComponents: [DialogVComponent],
})
export class DialogVModule { }
