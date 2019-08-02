import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-card-searcher',
  templateUrl: './card-searcher.component.html',
  styleUrls: ['./card-searcher.component.scss']
})
export class CardSearcherComponent implements OnInit {
  @Input() searchButton: boolean;
  @Output() inputData = new EventEmitter<string>();
  searchInput: string;
  constructor() { }

  ngOnInit() {

  }
  sendData() {
    this.inputData.emit(this.searchInput);
  }

}
