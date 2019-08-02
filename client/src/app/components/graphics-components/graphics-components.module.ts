import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NoResultsModule } from '../no-results/no-results.module';

// components
import { GraphicsFiltersComponent } from './graphics-filters/graphics-filters.component';
import { GraphicsContentComponent } from './graphics-content/graphics-content.component';
import { CardChartModule } from '../card-chart/card-chart.module';
import { DirectivesModule } from '../../directives/directives.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    CardChartModule,
    DirectivesModule,
    NoResultsModule
  ],
  declarations: [
    GraphicsFiltersComponent,
    GraphicsContentComponent,
  ],
  exports: [
    GraphicsFiltersComponent,
    GraphicsContentComponent,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    CardChartModule,
    DirectivesModule,
    NoResultsModule
  ]
})
export class GraphicsComponentsModule { }
