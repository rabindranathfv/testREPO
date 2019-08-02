import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltersSimpleComponent } from './filters-simple/filters-simple.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/components/material/material.module';

@NgModule({
  declarations: [FiltersSimpleComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule
  ],
  exports: [FiltersSimpleComponent,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule]
})
export class FiltersSimpleModule { }
