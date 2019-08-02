import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconLabelCellComponent } from './icon-label-cell.component';

describe('IconLabelCellComponent', () => {
  let component: IconLabelCellComponent;
  let fixture: ComponentFixture<IconLabelCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconLabelCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconLabelCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
