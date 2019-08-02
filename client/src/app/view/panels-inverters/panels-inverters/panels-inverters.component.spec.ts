import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelsInvertersComponent } from './panels-inverters.component';

describe('PanelsInvertersComponent', () => {
  let component: PanelsInvertersComponent;
  let fixture: ComponentFixture<PanelsInvertersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelsInvertersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelsInvertersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
