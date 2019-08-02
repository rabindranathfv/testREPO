import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { IconCellComponent } from '../custom-cells/icon-cell/icon-cell.component';
import { UrlCellsComponent } from '../custom-cells/url-cells/url-cells.component';
import { BtnCellComponent } from '../custom-cells/btn-cell/btn-cell.component';
import { GraphCellComponent } from '../custom-cells/graph-cell/graph-cell.component';
import { pieChart } from 'src/app/_mock-datas';
import { ActionsCellComponent } from '../custom-cells/actions-cell/actions-cell.component';
import { ResourcesCellComponent } from '../custom-cells/resources-cell/resources-cell.component';

@Component({
  selector: 'app-table-ag-grid',
  templateUrl: './table-ag-grid.component.html',
  styleUrls: ['./table-ag-grid.component.scss']
})
export class TableAgGridComponent {


  @Input() columnDefs: any;
  @Input() rowData: any;
  @Input() typeDisplay: string;
  @Input() search: string;

  public paginationPageSize: number;
  public colResizeDefault: string;
  public gridApi: any;
  public gridColumnApi: any;
  
  constructor() {
    this.paginationPageSize = 10;
    this.colResizeDefault = 'shift';
  }

  frameworkComponents = {
    iconCellCustomized: IconCellComponent,
    urlCellCustomized: UrlCellsComponent,
    btnCellCustomized: BtnCellComponent,
    graphCellCustomized: GraphCellComponent,
    actionsCellComponent: ActionsCellComponent,
    resourcesCellComponent: ResourcesCellComponent
  };


  /**
   * These functions are used to render a full size ag-grid table
   */
  public onGridReady(params) {
    params.api.sizeColumnsToFit();
    params.api.setQuickFilter(this.search);
  }
  
}
