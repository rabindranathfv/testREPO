import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-url-cells',
  templateUrl: './url-cells.component.html',
  styleUrls: ['./url-cells.component.scss']
})
export class UrlCellsComponent implements OnInit, ICellRendererAngularComp {

  public cellUrlValue: any;
  constructor() { }

  agInit(params: any) {
    this.cellUrlValue = params.value;
  }

  ngOnInit() {
  }

  refresh(params: any): boolean {
    this.cellUrlValue = params.value;
    return true;
  }

}
