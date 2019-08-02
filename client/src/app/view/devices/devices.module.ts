import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevicesRoutingModule } from './devices-routing.module';
import { DevicesComponent } from './devices/devices.component';
import { DirectivesModule } from 'src/app/directives/directives.module';
import { CardViewModule } from 'src/app/components/card-view/card-view.module';
import { HeaderTitleModule } from 'src/app/components/header-title/header-title.module';
import { ModalsModule } from 'src/app/components/modals/modals.module';
import { MaterialModule } from 'src/app/components/material/material.module';
import { CardSearcherModule } from '../../components/card-searcher/card-searcher.module';
import { PipesModule } from '../../pipes/pipes.module';
import { NoResultsModule } from "../../components/no-results/no-results.module";
import { PlantsPerDevicesComponent } from './plants-per-devices/plants-per-devices.component';
import { InvertersPerDevicesComponent } from './inverters-per-devices/inverters-per-devices.component';
import { TableAgGridModule } from 'src/app/components/table-ag-grid/table-ag-grid.module';

@NgModule({
  declarations: [
    DevicesComponent,
    PlantsPerDevicesComponent,
    InvertersPerDevicesComponent
  ],
  imports: [
    CommonModule,
    DevicesRoutingModule,
    DirectivesModule,
    CardViewModule,
    HeaderTitleModule,
    ModalsModule,
    MaterialModule,
    CardSearcherModule,
    PipesModule,
    NoResultsModule,
    TableAgGridModule
  ],
  exports: [
    DevicesComponent,
    PlantsPerDevicesComponent,
    InvertersPerDevicesComponent,
    DevicesRoutingModule,
    DirectivesModule,
    CardViewModule,
    HeaderTitleModule,
    ModalsModule,
    MaterialModule
  ]
})
export class DevicesModule { }
