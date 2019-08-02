import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantsInvertersComponent } from './plants-inverters.component';

describe('PlantsInvertersComponent', () => {
  let component: PlantsInvertersComponent;
  let fixture: ComponentFixture<PlantsInvertersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantsInvertersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantsInvertersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
