import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-show-data-json',
  templateUrl: './show-data-json.component.html',
  styleUrls: ['./show-data-json.component.scss']
})
export class ShowDataJsonComponent {

  constructor(
    public dialogRef: MatDialogRef<ShowDataJsonComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  close(): void {
    this.dialogRef.close();
  }

}
