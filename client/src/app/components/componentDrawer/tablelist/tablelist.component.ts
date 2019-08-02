import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  AfterViewInit,
  OnChanges
} from '@angular/core';
import {
  MatTableDataSource,
  MatPaginator,
  MatSort
} from '@angular/material';

@Component({
  selector: 'app-tablelist',
  templateUrl: './tablelist.component.html',
  styleUrls: ['./tablelist.component.scss']
})
export class TablelistComponent
implements OnInit, AfterViewInit, OnChanges {

  @Input() columns: string[];
  @Input() data: any[];
  @Input() stripped = false;
  @Input() size;

  @Output() clickCell = new EventEmitter<{row, col, source, event}>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  dataSource = new MatTableDataSource();
  constructor() { }

  ngOnInit() {
    // this.dataSource.data = this.data;
  }
  ngAfterViewInit() {
    this.dataSource.data = this.data;
    if (this.dataSource) {
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    }
  }
  ngOnChanges( changes ) {
    if (changes.data && !changes.data.firstChange) {
      // console.log(changes.data.currentValue);
      // this.dataSource.data = JSON.parse(JSON.stringify(this.data));
      this.dataSource.data = changes.data.currentValue;
    }
    if (this.dataSource) {
      this.dataSource.sort = this.sort;
    }

    if (changes.paginator) {
      this.dataSource.paginator = this.paginator;
      this.paginator.hidePageSize = true;
      /* if (this.paginator) {
        // this.dataSource.data = this.data;
      } */
    }
  }
  trackFunction( index, item ) {
    const id = item.id ? item.id : index;
    return id;
  }
  emit( row, col, source, event ) {
    this.clickCell.emit({row, col, source, event});
  }

}
