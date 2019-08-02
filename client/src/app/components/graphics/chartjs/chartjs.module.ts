import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
import { ChartjsComponent } from './chartjs.component';

@NgModule({
  declarations: [
    ChartjsComponent
  ],
  imports: [
    CommonModule,
    ChartsModule
  ],
  exports: [
    ChartjsComponent,
    ChartsModule
  ]
})
export class ChartjsModule { }
