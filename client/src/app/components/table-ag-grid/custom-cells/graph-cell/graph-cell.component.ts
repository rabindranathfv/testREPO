import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { pieChart } from 'src/app/_mock-datas';

@Component({
  selector: 'app-graph-cell',
  templateUrl: './graph-cell.component.html',
  styleUrls: ['./graph-cell.component.scss']
})
export class GraphCellComponent implements OnInit, ICellRendererAngularComp {

  public chartjsDatas: any;
  public typeDisplay: string;
  constructor() {
    this.typeDisplay = 'chartTable';
   }

  agInit(params: any) {
    console.log(params, params.value);
    this.chartjsDatas = [...params.value];
  }

  ngOnInit() {
  }

  refresh(params: any ): boolean {
    this.chartjsDatas = params.value;
    return true;
  }

}
