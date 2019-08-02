import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardChartBodyComponent } from './card-chart-body.component';

describe('CardChartBodyComponent', () => {
  let component: CardChartBodyComponent;
  let fixture: ComponentFixture<CardChartBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardChartBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardChartBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
