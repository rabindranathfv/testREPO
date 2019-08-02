import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ShowDataJsonComponent } from 'src/app/components/show-data-json/show-data-json/show-data-json.component';

@Component({
  selector: 'app-btn-cell',
  templateUrl: './btn-cell.component.html',
  styleUrls: ['./btn-cell.component.scss']
})
export class BtnCellComponent {

  params: any;
  button: string;
  function: any;
  constructor(
    public dialog: MatDialog
  ) { }

  agInit(params: any): void {
    this.params = params;
    this.button = this.params.settings.icon;
    this.function = this.params.settings.function;
  }

  viewDataSheet() {
    const dialogRef = this.dialog.open(ShowDataJsonComponent, {
      width: '600px',
      data: this.params.data
    });

    dialogRef.afterClosed().subscribe(r => {
      console.log("Dialog closed");
    });
  }

}
