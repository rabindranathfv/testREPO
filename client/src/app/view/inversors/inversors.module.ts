import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InversorsRoutingModule } from './inversors-routing.module';
import { InversorsComponent } from './inversors/inversors.component';
import { DirectivesModule } from 'src/app/directives/directives.module';
import { CardViewModule } from 'src/app/components/card-view/card-view.module';
import { HeaderTitleModule } from 'src/app/components/header-title/header-title.module';
import { ModalsModule } from 'src/app/components/modals/modals.module';
import { MaterialModule } from 'src/app/components/material/material.module';
import { CardSearcherModule } from '../../components/card-searcher/card-searcher.module';
import { PipesModule } from '../../pipes/pipes.module';
import {NoResultsModule} from '../../components/no-results/no-results.module';
import { TableAgGridModule } from 'src/app/components/table-ag-grid/table-ag-grid.module';
import { AddResourceModalModule } from 'src/app/components/add-resource-modal/add-resource-modal.module';

@NgModule({
  declarations: [InversorsComponent],
  imports: [
    CommonModule,
    InversorsRoutingModule,
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
    InversorsComponent,
    InversorsRoutingModule,
    DirectivesModule,
    CardViewModule,
    HeaderTitleModule,
    ModalsModule,
    MaterialModule
  ]
})
export class InversorsModule { }
