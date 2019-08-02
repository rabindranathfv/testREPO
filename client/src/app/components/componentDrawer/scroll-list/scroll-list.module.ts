import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule, MatToolbarModule } from '@angular/material';

import { ScrollListComponent } from './scroll-list.component';
@NgModule({
  imports: [
    CommonModule,
    MatListModule,
    MatToolbarModule
  ],
  declarations: [ ScrollListComponent ],
  entryComponents: [ ScrollListComponent ],
  exports: [ ScrollListComponent ],
})
export class ScrollListModule { }
