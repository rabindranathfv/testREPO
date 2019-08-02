import {
  Component,
  Input,
  OnInit,
} from '@angular/core';

import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
})
export class GridComponent
implements OnInit {
  @Input() gridConfig;
  gutterSize = '1px';
  cols = '3';
  rowHeight = '100px';
  drag = false;
  //
  @Input() tiles;
  constructor(
  ) { }
  ngOnInit() {
    this.gutterSize = this.gridConfig.gutterSize;
    this.cols = this.gridConfig.cols;
    this.rowHeight = this.gridConfig.rowHeight;
  }
  elevation( number: number ) {
    if (number) {
      return `mat-elevation-z${number}`;
    } else {
      return `mat-elevation-z1`;
    }
  }
  drop(event: CdkDragDrop<string[]>) {
    if (this.drag) {

      moveItemInArray(this.tiles, event.previousIndex, event.currentIndex);
    }
  }
}
