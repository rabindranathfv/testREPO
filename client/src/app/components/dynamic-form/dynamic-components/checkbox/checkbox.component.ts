import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldConfig } from '../../../../interfaces/forms/field.interface';

@Component({
  selector: 'app-checkbox',
  template: `
    <div class="width-chx m-1" [formGroup]="group" >
      <mat-checkbox [formControlName]="field.name">{{field.label}}</mat-checkbox>
    </div>
  `,
  styles: [`
    .width-chx {
      width: 50%;
    }
  `]
})
export class CheckboxComponent implements OnInit {
  field: FieldConfig;
  group: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
