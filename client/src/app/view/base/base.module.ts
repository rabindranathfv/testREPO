import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseRoutingModule } from './base-routing.module';
import { BaseComponent } from './base/base.component';
import {HeaderTitleModule} from 'src/app/components/header-title/header-title.module';
import { GraphicsModule } from 'src/app/components/graphics/graphics.module';
import { ModalsModule } from 'src/app/components/modals/modals.module';
import { CardViewModule } from 'src/app/components/card-view/card-view.module';
import { DirectivesModule } from 'src/app/directives/directives.module';
import { GraphicsComponentsModule } from 'src/app/components/graphics-components/graphics-components.module'
import { AgGridModule } from 'ag-grid-angular';
import { AsideModule } from 'src/app/components/aside/aside.module';

@NgModule({
  declarations: [BaseComponent],
  imports: [
    CommonModule,
    BaseRoutingModule,
    HeaderTitleModule,
    GraphicsModule,
    ModalsModule,
    CardViewModule,
    DirectivesModule,
    GraphicsComponentsModule,
    AgGridModule,
    AsideModule,
  ],
  exports: [
    BaseComponent,
    GraphicsModule,
    ModalsModule,
    CardViewModule,
    DirectivesModule,
    GraphicsComponentsModule,
    AgGridModule,
    AsideModule
  ]
})
export class BaseModule { }
