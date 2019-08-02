import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tabs-data-tables',
  templateUrl: './tabs-data-tables.component.html',
  styleUrls: ['./tabs-data-tables.component.scss']
})
export class TabsDataTablesComponent implements OnInit {
  @Input() dataTabs: any;

  constructor() { }

  ngOnInit() {
  }
}
