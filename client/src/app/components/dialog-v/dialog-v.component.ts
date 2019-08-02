import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogClose } from '@angular/material';

@Component({
  selector: 'app-dialog-v',
  templateUrl: './dialog-v.component.html',
  styleUrls: ['./dialog-v.component.scss']
})
export class DialogVComponent implements OnInit {

  data;
  constructor(
    private dialogRef: MatDialogRef<DialogVComponent>,
    @Inject(MAT_DIALOG_DATA) data: {component?, params?, text?, height?, width?}
  ) {
    this.data = data;
  }
  ngOnInit() {
  }
}
