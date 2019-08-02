import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersPerPlantsComponent } from './customers-per-plants.component';

describe('CustomersPerPlantsComponent', () => {
  let component: CustomersPerPlantsComponent;
  let fixture: ComponentFixture<CustomersPerPlantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomersPerPlantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersPerPlantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
