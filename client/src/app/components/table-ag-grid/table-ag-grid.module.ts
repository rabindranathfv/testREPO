import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';

import { IconCellComponent } from './custom-cells/icon-cell/icon-cell.component';
import { TableAgGridComponent } from './table-ag-grid/table-ag-grid.component';
import { UrlCellsComponent } from './custom-cells/url-cells/url-cells.component';
import { BtnCellComponent } from './custom-cells/btn-cell/btn-cell.component';
import { GraphCellComponent } from './custom-cells/graph-cell/graph-cell.component';

// modules
import { MaterialModule } from '../material/material.module';
import { GraphicsModule } from '../graphics/graphics.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActionsCellComponent } from './custom-cells/actions-cell/actions-cell.component'; // <== add the imports!
import { MatDialog } from '@angular/material';
import { ResourcesCellComponent } from './custom-cells/resources-cell/resources-cell.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    IconCellComponent,
    TableAgGridComponent,
    UrlCellsComponent,
    BtnCellComponent,
    GraphCellComponent,
    ActionsCellComponent,
    ResourcesCellComponent
  ],
  imports: [
    CommonModule,
    AgGridModule.withComponents([
      IconCellComponent,
      UrlCellsComponent,
      BtnCellComponent,
      GraphCellComponent,
      ActionsCellComponent,
      ResourcesCellComponent,
      MatDialog
    ]),
    RouterModule,
    MaterialModule,
    GraphicsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    IconCellComponent,
    UrlCellsComponent,
    BtnCellComponent,
    GraphCellComponent,
    ActionsCellComponent,
    ResourcesCellComponent
  ],
  exports: [
    IconCellComponent,
    BtnCellComponent,
    TableAgGridComponent,
    ActionsCellComponent,
    ResourcesCellComponent,
    RouterModule
  ]
})
export class TableAgGridModule { }
