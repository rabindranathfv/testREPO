import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphCellComponent } from './graph-cell.component';

describe('GraphCellComponent', () => {
  let component: GraphCellComponent;
  let fixture: ComponentFixture<GraphCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
