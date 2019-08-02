import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableMaterialComponent } from './table-material/table-material.component';
import { MaterialModule } from 'src/app/components/material/material.module';
import { DynamicTableModule,  CellService } from 'material-dynamic-table';
import { IconLabelCellComponent } from './custom-cells/icon-label-cell/icon-label-cell.component';
import { PercentCellComponent } from './custom-cells/percent-cell/percent-cell.component';
import { LinkCellComponent } from 'src/app/components/table-material/custom-cells/link-cell/link-cell.component';
import { RouterModule } from '@angular/router';
import { CenterCellComponent } from './custom-cells/center-cell/center-cell.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    DynamicTableModule,
    RouterModule
  ],
  declarations: [TableMaterialComponent, LinkCellComponent, IconLabelCellComponent, PercentCellComponent, CenterCellComponent],
  entryComponents: [
    LinkCellComponent,
    IconLabelCellComponent,
    PercentCellComponent,
    CenterCellComponent
  ],
  exports: [
    TableMaterialComponent,
    MaterialModule,
    DynamicTableModule,
    RouterModule
  ]
})
export class TableMaterialModule {
  constructor(
    private readonly cellService: CellService) {
      cellService.registerCell('links', LinkCellComponent);
      cellService.registerCell('icon-label', IconLabelCellComponent);
      cellService.registerCell('center-cell', CenterCellComponent);
      cellService.registerCell('percent', PercentCellComponent);
  }
}
