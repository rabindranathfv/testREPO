import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterCellComponent } from './center-cell.component';

describe('CenterCellComponent', () => {
  let component: CenterCellComponent;
  let fixture: ComponentFixture<CenterCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CenterCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CenterCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
