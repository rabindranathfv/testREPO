import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvertersPerDevicesComponent } from './inverters-per-devices.component';

describe('InvertersPerDevicesComponent', () => {
  let component: InvertersPerDevicesComponent;
  let fixture: ComponentFixture<InvertersPerDevicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvertersPerDevicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvertersPerDevicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
