import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.scss']
})
export class ModalsComponent implements OnInit {

  public resource: string;
  public typeOperation: string;
  public title: string;
  public serie: string;
  dataModel: any;
  form: BehaviorSubject<any> = new BehaviorSubject(null);
  public headerTitle: string;

  constructor( public dialogRef: MatDialogRef<ModalsComponent>,
               @Inject(MAT_DIALOG_DATA) public data: {
                 resource: string, title?: string  , typeOperation?: string , showOperationModal?, dataSet? ,
                 datasToBuild?, id? , name?, height?, width?,
                 serie?
               }
  ) {}

  ngOnInit() {
    this.resource = this.data.resource;
    this.typeOperation = (this.data.typeOperation) ? this.data.typeOperation : null;
    if(this.typeOperation === 'create'){
      this.title = 'NEW ' + this.resource;
    } else {
      this.title = (this.data.name) ? `${this.data.id} - ${this.data.name}` : `${this.data.id} - ${this.data.serie} - ${this.data.resource.charAt(0)}${this.data.resource.slice(1)}`;
    }
    this.dataModel = this.data;
  }

}
