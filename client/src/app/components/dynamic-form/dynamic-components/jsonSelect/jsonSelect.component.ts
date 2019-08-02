import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldConfig } from '../../../../interfaces/forms/field.interface';

@Component({
  selector: 'app-json-select',
  template: `
  <mat-accordion *ngIf="field.meta">
    <mat-expansion-panel class="mb-1">
        <mat-expansion-panel-header>
            <mat-panel-title>
            {{ field.label }}
            </mat-panel-title>
            <mat-panel-description>
                add new field
            </mat-panel-description>
        </mat-expansion-panel-header>

        <div class="add-new-fields" *ngIf="field.meta" [formGroup]="group">
            <mat-form-field class="demo-full-width margin-top">
                <mat-select [placeholder]="field.label">
                    <mat-option *ngFor="let item of field.meta.selectItem.options" [value]="item">{{item}}</mat-option>
                </mat-select>
            </mat-form-field>

            <mat-form-field *ngIf="field.meta.areaItem">
                <textarea #jsonData matInput
                    [formControlName]="field.name"
                    matTextareaAutosize
                    matAutosizeMinRows=5 matAutosizeMaxRows=15
                    cols=50 rows=25
                    wrap="off"
                    [placeholder]="field.meta.areaItem.label"
                    [type]="field.meta.areaItem.inputType"
                    [value]="selectedKey"
                    (keyup)="getJson(jsonData.value)">
                </textarea>
            </mat-form-field>

            <pre *ngIf="jsonParams" class="mb-1 mt-1 json-data"> {{ jsonParams  }}</pre>
        </div>
    </mat-expansion-panel>
  </mat-accordion>
  `,
  styles: [
    `
       .add-new-fields {
           display: flex;
           flex-direction: column;
       }

       .json-data {
            background-color: #eaeef1;
            border: 2px solid #d9d9d9;
            overflow-x: hidden !important;
       }
    `
  ]
})
export class JsonSelectComponent implements OnInit {
  field: FieldConfig;
  group: FormGroup;
  selectedKey: any;
  jsonParams: any;

  constructor() {
      this.selectedKey = '';
  }

  ngOnInit() { }

  /* if you need to grab datas from select with this method in html (selectionChange)="changeClient($event.value)" */
  /* changeClient(data) {
   console.log(data);
   this.selectedKey = `{ ${data}: }`;
  } */

  getJson( json: any) {
    // console.log(json);
    this.jsonParams = json;
  }

}
