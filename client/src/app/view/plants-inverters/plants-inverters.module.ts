import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlantsInvertersRoutingModule } from './plants-inverters-routing.module';
import { PlantsInvertersComponent } from './plants-inverters/plants-inverters.component';

import { DirectivesModule } from 'src/app/directives/directives.module';
import { CardViewModule } from 'src/app/components/card-view/card-view.module';
import { HeaderTitleModule } from 'src/app/components/header-title/header-title.module';
import { ModalsModule } from 'src/app/components/modals/modals.module';
import { MaterialModule } from 'src/app/components/material/material.module';
import { CardSearcherModule } from 'src/app/components/card-searcher/card-searcher.module';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { NoResultsModule } from 'src/app/components/no-results/no-results.module';
import { TableAgGridModule } from 'src/app/components/table-ag-grid/table-ag-grid.module';
import { PanelsInvertersRoutingModule } from '../panels-inverters/panels-inverters-routing.module';

@NgModule({
  declarations: [
    PlantsInvertersComponent
  ],
  imports: [
    CommonModule,
    PlantsInvertersRoutingModule,
    DirectivesModule,
    CardViewModule,
    HeaderTitleModule,
    ModalsModule,
    MaterialModule,
    CardSearcherModule,
    PipesModule,
    NoResultsModule,
    TableAgGridModule,
  ],
  exports: [
    PlantsInvertersComponent,
    PlantsInvertersRoutingModule
  ]
})
export class PlantsInvertersModule { }
