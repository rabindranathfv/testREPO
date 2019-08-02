import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { CellComponent, ColumnConfig } from 'material-dynamic-table';
import { PlantasInfos } from 'src/app/interfaces/plantas-infos/plantas-infos'

@Component({
  selector: 'app-percent-cell',
  templateUrl: './percent-cell.component.html',
  styleUrls: ['./percent-cell.component.scss']
})
export class PercentCellComponent implements CellComponent, OnChanges {


  @Input()column: ColumnConfig;
  @Input()row: PlantasInfos;



  public widthProgress: number; 

  constructor() { 

  }

  ngOnInit() {
    this.setPercent()

  }
  ngOnChanges() {

    this.setPercent()
  
  }

  public setPercent() {

    this.widthProgress = this.row[this.column.name]

  }

}
