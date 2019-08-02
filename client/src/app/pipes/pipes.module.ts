import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CardSearchPipe} from './card-search/card-search.pipe';

@NgModule({
  declarations: [CardSearchPipe],
  imports: [
    CommonModule
  ],
  exports: [CardSearchPipe]
})
export class PipesModule { }
