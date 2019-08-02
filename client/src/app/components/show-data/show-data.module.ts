import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { ShowDataComponent } from './show-data/show-data.component';
@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
  ],
  declarations: [
    ShowDataComponent
  ],
  exports: [
    MaterialModule,
    ShowDataComponent,
],
})
export class ShowDataModule { }
