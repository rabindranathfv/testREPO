import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantsPerCustomerComponent } from './plants-per-customer.component';

describe('PlantsPerCustomerComponent', () => {
  let component: PlantsPerCustomerComponent;
  let fixture: ComponentFixture<PlantsPerCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantsPerCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantsPerCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
