import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanelsRoutingModule } from './panels-routing.module';
import { PanelsComponent } from './panels/panels.component';
import { DirectivesModule } from 'src/app/directives/directives.module';
import { CardViewModule } from 'src/app/components/card-view/card-view.module';
import { HeaderTitleModule } from 'src/app/components/header-title/header-title.module';
import { ModalsModule } from 'src/app/components/modals/modals.module';
import { MaterialModule } from 'src/app/components/material/material.module';
import { CardSearcherModule } from 'src/app/components/card-searcher/card-searcher.module';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { NoResultsModule } from 'src/app/components/no-results/no-results.module';
import { TableAgGridModule } from 'src/app/components/table-ag-grid/table-ag-grid.module';
import { AddResourceModalModule } from 'src/app/components/add-resource-modal/add-resource-modal.module';

@NgModule({
  declarations: [PanelsComponent],
  imports: [
    CommonModule,
    PanelsRoutingModule,
    DirectivesModule,
    CardViewModule,
    HeaderTitleModule,
    ModalsModule,
    MaterialModule,
    CardSearcherModule,
    PipesModule,
    NoResultsModule,
    TableAgGridModule,
    AddResourceModalModule
  ],
  exports: [
    PanelsRoutingModule
  ]
})
export class PanelsModule { }
