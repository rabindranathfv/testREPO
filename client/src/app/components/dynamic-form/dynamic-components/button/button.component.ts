import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldConfig } from '../../../../interfaces/forms/field.interface';

@Component({
  selector: 'app-button',
  template: `
    <div class="demo-full-width margin-top m-1" [formGroup]="group">
      <button type="submit" mat-raised-button color="primary">{{field.label}}</button>
    </div>
  `,
  styles: []
})
export class ButtonComponent implements OnInit {
  field: FieldConfig;
  group: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
