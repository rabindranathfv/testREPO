import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevicesPerPlantsComponent } from './devices-per-plants.component';

describe('DevicesPerPlantsComponent', () => {
  let component: DevicesPerPlantsComponent;
  let fixture: ComponentFixture<DevicesPerPlantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevicesPerPlantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevicesPerPlantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
