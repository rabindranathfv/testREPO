import { Component, OnInit, Input} from '@angular/core';
import { MatDialog } from '@angular/material';
import { ShowDataJsonComponent } from '../../show-data-json/show-data-json/show-data-json.component';

@Component({
  selector: 'app-card-body',
  templateUrl: './card-body.component.html',
  styleUrls: ['./card-body.component.scss']
})
export class CardBodyComponent implements OnInit {

  @Input() dataObject:any // one object, full datas for one card
  @Input() datasCardBody:any; // Datas to know what to display on the card

  constructor(
    public dialog: MatDialog
  ) {
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

  isEmpty(key: any, type: string ){
    return  this.dataObject[key]  == null;
  }

}
