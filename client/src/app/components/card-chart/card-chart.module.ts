import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import {CardChartTitleComponent} from './card-chart-title/card-chart-title.component';
import {CardChartBodyComponent} from './card-chart-body/card-chart-body.component';
import { GraphicsModule } from 'src/app/components/graphics/graphics.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    GraphicsModule

  ],
  declarations: [
    CardChartTitleComponent,
    CardChartBodyComponent,
  ],
  exports: [
    MaterialModule,
    CardChartTitleComponent,
    CardChartBodyComponent,
    GraphicsModule
],
})
export class CardChartModule { }
