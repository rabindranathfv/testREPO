import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerIndicatorComponent } from './spinner-indicator.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [SpinnerIndicatorComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    SpinnerIndicatorComponent,
    MaterialModule
  ]
})
export class SpinnerIndicatorModule { }
