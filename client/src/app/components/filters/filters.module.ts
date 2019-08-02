import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltersSimpleModule } from './filters-simple/filters-simple.module';
import { MaterialModule } from 'src/app/components/material/material.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FiltersSimpleModule,
    MaterialModule,
  ],
  exports: [FiltersSimpleModule, MaterialModule]
})
export class FiltersModule { }
