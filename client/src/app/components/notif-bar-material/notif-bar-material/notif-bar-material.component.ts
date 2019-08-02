import { Component, Inject } from '@angular/core';
import { MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material';

import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-notif-bar-material',
  templateUrl: './notif-bar-material.component.html',
  styleUrls: ['./notif-bar-material.component.scss']
})
export class NotifBarMaterialComponent {
  constructor(
    private translate: TranslateService,
    public snackBarRef: MatSnackBarRef<NotifBarMaterialComponent>,
    @Inject(MAT_SNACK_BAR_DATA) public data: any
  ) {}

}
