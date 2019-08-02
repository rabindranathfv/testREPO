import { Component, OnInit, Input, ViewChild, OnChanges } from '@angular/core';
import { FilteredDataSource } from '../data-source/filtred-data-source';

@Component({
  selector: 'app-table-material',
  templateUrl: './table-material.component.html',
  styleUrls: ['./table-material.component.scss']
})
export class TableMaterialComponent implements OnInit, OnChanges {

  @Input() datas: any; //Datas from the API
  @Input() columnsConfig: any;
  dataSource: any; // object we will give as input in template
  columns: any; // object we will give as input in template
  pageSize: number;
  pageSizeOptions: number[];


  constructor() {

    this.pageSize = 10;
    this.pageSizeOptions = [10, 15, 20];
   }


  ngOnInit() {
  }

  ngOnChanges() {

    if (this.datas) {
    this.dataSource = new FilteredDataSource<object>(this.datas);
  }
    if (this.columnsConfig) {
    this.columns = this.columnsConfig;
  }
  }

}
