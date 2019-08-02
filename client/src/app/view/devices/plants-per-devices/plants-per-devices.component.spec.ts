import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantsPerDevicesComponent } from './plants-per-devices.component';

describe('PlantsPerDevicesComponent', () => {
  let component: PlantsPerDevicesComponent;
  let fixture: ComponentFixture<PlantsPerDevicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantsPerDevicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantsPerDevicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
