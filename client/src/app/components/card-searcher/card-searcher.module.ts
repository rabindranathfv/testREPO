import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardSearcherComponent } from './card-searcher/card-searcher.component';
import {MatButtonModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import { NoResultsSearchComponent } from './no-results-search/no-results-search.component';

@NgModule({
  declarations: [CardSearcherComponent, NoResultsSearchComponent],
  exports: [
    CardSearcherComponent,
    NoResultsSearchComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class CardSearcherModule { }
