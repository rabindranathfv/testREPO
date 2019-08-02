import { Component, OnInit, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-scroll-list',
  templateUrl: './scroll-list.component.html'
})
export class ScrollListComponent implements OnInit {

  // position = 'relative!important';

  position = {
    position: 'absolute'
  };
  @Input() title: string;
  @Input() valueSubscription: BehaviorSubject<any[]>;
  @Input() color = 'primary';
  data: any[];
  constructor() { }

  ngOnInit() {
    // console.log(this.valueSubscription);
    if (this.valueSubscription && this.valueSubscription.subscribe) {
      this.valueSubscription.subscribe(data => {
        // console.log(data);
        this.data = data;
      });
    }
  }
}
