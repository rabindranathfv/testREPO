import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatRippleModule } from '@angular/material';
import { ButtonComponent } from './button.component';
import { RouterModule } from '@angular/router';
// import { LaddaModule } from 'angular2-ladda';

@NgModule({
  imports: [
    CommonModule,
    /* MatButtonModule,
    LaddaModule, */
    RouterModule,
    MatRippleModule
  ],
  declarations: [ButtonComponent],
  exports: [ButtonComponent],
  entryComponents: [ButtonComponent],
})
export class ButtonModule { }
