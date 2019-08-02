import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-spinner-indicator',
  templateUrl: './spinner-indicator.component.html',
  styleUrls: ['./spinner-indicator.component.scss']
})
export class SpinnerIndicatorComponent implements OnInit {
  @Input() type: string;
  @Input() powerValue: number;
  @Input() stateValues: any;
  @Input() indicatorName: any;
  constructor() { }

  ngOnInit() {
  }

}
