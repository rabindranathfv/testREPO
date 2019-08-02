import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-icon-cell',
  templateUrl: './icon-cell.component.html',
  styleUrls: ['./icon-cell.component.scss']
})
export class IconCellComponent implements OnInit, ICellRendererAngularComp {

  public cellValue: any;
  public icon: any;
  public iconColor: any;

  constructor() { }

  ngOnInit() {
  }

  agInit(params: any) {
    this.cellValue = params.value['label'];
    this.icon = params.value['icon']['name']
    this.iconColor = params.value['icon']['color']
  }

  public refresh(params: any): boolean {
    this.cellValue = params.value['label'];
    this.icon= params.value['icon']['color'];    
    return true;
  }

}
