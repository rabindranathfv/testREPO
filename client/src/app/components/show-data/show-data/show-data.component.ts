import { Component, OnInit, Input } from '@angular/core';
import { FieldConfig } from 'src/app/interfaces/field.interface';
import { ShowDataJsonComponent } from '../../show-data-json/show-data-json/show-data-json.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-show-data',
  templateUrl:'./show-data.component.html',
  styleUrls: ['./show-data.component.scss']
})
export class ShowDataComponent implements OnInit {

  @Input() field: FieldConfig[] = [];
  constructor(
    public dialog: MatDialog
  ) {
    console.log(this.field);
   }

  ngOnInit() {

  }

  viewDataSheet(data) {
    const dialogRef = this.dialog.open(ShowDataJsonComponent, {
      width: '600px',
      data: data
    });

    dialogRef.afterClosed().subscribe(r => {
      console.log("Dialog closed");
    });
  }

}
