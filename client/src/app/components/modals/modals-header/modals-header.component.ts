import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modals-header',
  templateUrl: './modals-header.component.html',
  styleUrls: ['./modals-header.component.scss']
})
export class ModalsHeaderComponent implements OnInit {

  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}
