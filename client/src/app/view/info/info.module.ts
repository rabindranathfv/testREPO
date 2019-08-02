import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfoRoutingModule } from './info-routing.module';
import { InfoComponent } from './info/info.component';
import { HttpClient } from '@angular/common/http';
import { CustomersRoutingModule } from '../customers/customers-routing.module';
import { DirectivesModule } from 'src/app/directives/directives.module';
import { CardViewModule } from 'src/app/components/card-view/card-view.module';
import { HeaderTitleModule } from 'src/app/components/header-title/header-title.module';
import { ModalsModule } from 'src/app/components/modals/modals.module';
import { MaterialModule } from 'src/app/components/material/material.module';
import { CardSearcherModule } from 'src/app/components/card-searcher/card-searcher.module';
import { FormsModule } from '@angular/forms';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { AddResourceModalModule } from 'src/app/components/add-resource-modal/add-resource-modal.module';
import { TableAgGridModule } from 'src/app/components/table-ag-grid/table-ag-grid.module';
import { NoResultsModule } from 'src/app/components/no-results/no-results.module';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

@NgModule({
  declarations: [InfoComponent],
  imports: [
    CommonModule,
    DirectivesModule,
    CardViewModule,
    HeaderTitleModule,
    ModalsModule,
    MaterialModule,
    CardSearcherModule,
    FormsModule,
    PipesModule,
    AddResourceModalModule,
    TableAgGridModule,
    NoResultsModule,
    TranslateModule.forChild({
      loader: {
      provide: TranslateLoader,
      useFactory: HttpLoaderFactory,
      deps: [HttpClient]
    },
      isolate: false
    })
  ],
  exports: [
    InfoComponent,
    InfoRoutingModule,
    DirectivesModule,
    CardViewModule,
    HeaderTitleModule,
    ModalsModule,
    MaterialModule,
    TranslateModule
  ]
})
export class InfoModule { }
// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
