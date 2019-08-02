import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardChartTitleComponent } from './card-chart-title.component';

describe('CardChartTitleComponent', () => {
  let component: CardChartTitleComponent;
  let fixture: ComponentFixture<CardChartTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardChartTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardChartTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
