import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';

import { CustomersComponent } from './customers/customers.component';
import { DirectivesModule } from '../../directives/directives.module';
import { HeaderTitleModule } from 'src/app/components/header-title/header-title.module';
import { CardViewModule } from 'src/app/components/card-view/card-view.module';
import { ModalsModule } from 'src/app/components/modals/modals.module';
import { MaterialModule } from 'src/app/components/material/material.module';
import { CardSearcherModule } from '../../components/card-searcher/card-searcher.module';
import { FormsModule } from '@angular/forms';
import { PipesModule } from '../../pipes/pipes.module';
import { NoResultsModule } from '../../components/no-results/no-results.module';
import { PlantsPerCustomerComponent } from './plants-per-customer/plants-per-customer.component';
import { TableAgGridModule } from 'src/app/components/table-ag-grid/table-ag-grid.module';

// internationalization
import { TranslateHttpLoader} from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { AddResourceModalModule } from 'src/app/components/add-resource-modal/add-resource-modal.module';

@NgModule({
  declarations: [
    CustomersComponent,
    PlantsPerCustomerComponent,
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
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
    CustomersComponent,
    PlantsPerCustomerComponent,
    CustomersRoutingModule,
    DirectivesModule,
    CardViewModule,
    HeaderTitleModule,
    ModalsModule,
    MaterialModule,
    TranslateModule
  ]
})
export class CustomersModule { }
// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
