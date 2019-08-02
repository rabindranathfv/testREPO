import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-form',
  templateUrl: './list-form.component.html',
  styleUrls: ['./list-form.component.scss']
})
export class ListFormComponent implements OnInit {

  @Input() inputs: {title}[];
  @Output() updateValue: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  updateModel( el ) {
    // console.log(el);
    // console.log(this.inputs);
    
    this.updateValue.emit(this.inputs);
  }

}
