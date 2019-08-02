import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// component
import { AsideFormComponent } from './aside-form.component';
import { GridModule } from '../../grid/grid.module';

// modules
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MaterialModule } from '../../material/material.module';
import { DirectivesModule } from 'src/app/directives/directives.module';
import { DynamicFormModule } from '../../dynamic-form/dynamic-form.module';

@NgModule({
  imports: [
    CommonModule,
    GridModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    DirectivesModule,
    DynamicFormModule
  ],
  declarations: [
    AsideFormComponent
  ],
  providers: [
    MatDatepickerModule
  ],
  exports: [
    AsideFormComponent,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    DirectivesModule,
    DynamicFormModule
  ]
})
export class AsideFormModule { }
