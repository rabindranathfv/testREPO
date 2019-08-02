import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldConfig } from '../../../../interfaces/forms/field.interface';

@Component({
  selector: 'app-data-select',
  template: `
  <div>
    <mat-form-field class="demo-full-width margin-top m-1" [formGroup]="group">
      <mat-select [placeholder]="field.label" [id]="field.idRelated" [formControlName]="field.name">
        <mat-option *ngFor="let item of field.options" [value]="item.id">{{ item.label }}</mat-option>
      </mat-select>
    </mat-form-field>
  </div>
  `,
  styles: []
})
export class DataSelectComponent implements OnInit {
  field: FieldConfig;
  group: FormGroup;
  id: string;

  constructor() { }

  ngOnInit() {
  }

}
