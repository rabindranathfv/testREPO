import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartjsModule } from './chartjs/chartjs.module';
import { GoogleChartsModule, GoogleChartComponent } from 'angular-google-charts';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ChartjsModule,
    GoogleChartsModule
  ],
  exports: [
    ChartjsModule,
    GoogleChartsModule
  ]
})
export class GraphicsModule { }
