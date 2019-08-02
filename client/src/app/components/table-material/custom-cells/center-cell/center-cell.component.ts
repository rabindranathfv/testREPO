import { Component, OnInit, Input } from '@angular/core';
import { ColumnConfig } from 'material-dynamic-table';
import { PlantasInfos } from 'src/app/interfaces/plantas-infos/plantas-infos';

@Component({
  selector: 'app-center-cell',
  templateUrl: './center-cell.component.html',
  styleUrls: ['./center-cell.component.scss']
})
export class CenterCellComponent implements OnInit {

  @Input()column: ColumnConfig;
  @Input()row: PlantasInfos;

  constructor() { }

  ngOnInit() {
  }

}
