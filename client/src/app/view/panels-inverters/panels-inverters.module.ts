import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanelsInvertersRoutingModule } from './panels-inverters-routing.module';
import { PanelsInvertersComponent } from './panels-inverters/panels-inverters.component';
import { MaterialModule } from 'src/app/components/material/material.module';
import { DirectivesModule } from 'src/app/directives/directives.module';
import { CardViewModule } from 'src/app/components/card-view/card-view.module';
import { HeaderTitleModule } from 'src/app/components/header-title/header-title.module';
import { ModalsModule } from 'src/app/components/modals/modals.module';
import { CardSearcherModule } from 'src/app/components/card-searcher/card-searcher.module';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { NoResultsModule } from 'src/app/components/no-results/no-results.module';
import { TableAgGridModule } from 'src/app/components/table-ag-grid/table-ag-grid.module';
import { AddResourceModalModule } from 'src/app/components/add-resource-modal/add-resource-modal.module';

@NgModule({
  declarations: [PanelsInvertersComponent],
  imports: [
    CommonModule,
    DirectivesModule,
    CardViewModule,
    HeaderTitleModule,
    ModalsModule,
    MaterialModule,
    CardSearcherModule,
    PipesModule,
    NoResultsModule,
    AddResourceModalModule,
    TableAgGridModule,
    PanelsInvertersRoutingModule
  ],
  exports: [
    PanelsInvertersComponent
  ]
})
export class PanelsInvertersModule { }
