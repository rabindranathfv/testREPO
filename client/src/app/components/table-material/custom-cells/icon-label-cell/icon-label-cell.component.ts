import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { CellComponent, ColumnConfig } from 'material-dynamic-table';
import { PlantasInfos } from 'src/app/interfaces/plantas-infos/plantas-infos'

@Component({
  selector: 'app-icon-label-cell',
  templateUrl: './icon-label-cell.component.html',
  styleUrls: ['./icon-label-cell.component.scss']
})
export class IconLabelCellComponent implements CellComponent, OnChanges, OnInit {



  @Input()column: ColumnConfig;
  @Input()row: PlantasInfos;
  public iconCell: string;

  constructor() {
  }

  ngOnInit() {
    this.matchIcon();
  }


  ngOnChanges() {
    if (this.column) {
     this.matchIcon();
    }
  }

  // In the futur we could match the Icons directly inside the datas or precise selection
  //  depending on type of column and the value
  public matchIcon() {
    switch (this.column.name) {
      case 'planta':
      this.iconCell = 'notifications';
      break;
      case 'ultimaDatos':
      this.iconCell = 'trending_up';
      break;
      case 'datos':
      this.iconCell = 'done';
      break;
      default:
      this.iconCell = 'show_chart';
      break;

    }

  }
}
