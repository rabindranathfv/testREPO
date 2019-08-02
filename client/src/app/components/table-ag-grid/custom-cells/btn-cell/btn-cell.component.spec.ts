import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnCellComponent } from './btn-cell.component';

describe('BtnCellComponent', () => {
  let component: BtnCellComponent;
  let fixture: ComponentFixture<BtnCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
