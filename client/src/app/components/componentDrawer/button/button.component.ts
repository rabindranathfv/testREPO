import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  // styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() text;
  @Input() color;
  @Input() link;
  @Input() disabled;
  @Input() width = '100%';
  @Input() height = '100%';
  @Input() action = () => {};
  constructor() {
  }

  ngOnInit() {
    this.color = `btn-${this.color}`;
  }
}
