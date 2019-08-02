import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import {CardTitleComponent} from './card-title/card-title.component';
import {CardBodyComponent} from './card-body/card-body.component';
import { CardActionsComponent } from './card-actions/card-actions.component';
import { RouterModule } from '@angular/router';
import { CustomersComponent } from 'src/app/view/customers/customers/customers.component';
import { PlantsComponent } from 'src/app/view/plants/plants/plants.component';
import { DevicesComponent } from 'src/app/view/devices/devices/devices.component';
import { InversorsComponent } from 'src/app/view/inversors/inversors/inversors.component';
import { PanelsComponent } from 'src/app/view/panels/panels/panels.component';
import { ShowDataJsonModule } from '../show-data-json/show-data-json.module';
import { ShowDataJsonComponent } from '../show-data-json/show-data-json/show-data-json.component';
import { PanelsInvertersComponent } from 'src/app/view/panels-inverters/panels-inverters/panels-inverters.component';
import { PlantsInvertersComponent } from 'src/app/view/plants-inverters/plants-inverters/plants-inverters.component';
import { AddResourceModalComponent } from '../add-resource-modal/add-resource-modal/add-resource-modal.component';
import { UsersComponent } from 'src/app/view/users/users/users.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    ShowDataJsonModule
  ],
  declarations: [
    CardTitleComponent,
    CardBodyComponent,
    CardActionsComponent
  ],
  exports: [
    MaterialModule,
    CardTitleComponent,
    CardBodyComponent,
    CardActionsComponent,
    RouterModule,
    ShowDataJsonModule
  ],
  providers: [
    CustomersComponent,
    UsersComponent,
    PlantsComponent,
    DevicesComponent,
    InversorsComponent,
    PanelsComponent,
    PanelsInvertersComponent,
    PlantsInvertersComponent
  ],
  entryComponents: [ShowDataJsonComponent,AddResourceModalComponent]
})
export class CardViewModule { }
