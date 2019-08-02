import { Component, Input} from '@angular/core';
import { CellComponent, ColumnConfig } from 'material-dynamic-table';
import { PlantasInfos } from 'src/app/interfaces/plantas-infos/plantas-infos';
import { Router } from '@angular/router';

@Component({
    selector: 'ld-options-cell',
    templateUrl: './link-cell.component.html',
    styleUrls: ['./link-cell.component.scss']
})
export class LinkCellComponent implements CellComponent {

    @Input()column: ColumnConfig;

    @Input()row: PlantasInfos;

    public noLinkLabel: string;

    constructor( private router: Router) {

        // this.noLinkLabel = ' ... ';

    }

}