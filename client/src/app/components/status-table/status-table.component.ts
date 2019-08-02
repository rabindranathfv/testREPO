import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-status-table',
  templateUrl: './status-table.component.html',
  styleUrls: ['./status-table.component.scss']
})
export class StatusTableComponent implements OnInit {
  @Input() dataTableInput: any;

  constructor() { }

  ngOnInit() {
  }

}
