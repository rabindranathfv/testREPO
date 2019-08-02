import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinnerIndicatorComponent } from './spinner-indicator.component';

describe('SpinnerIndicatorComponent', () => {
  let component: SpinnerIndicatorComponent;
  let fixture: ComponentFixture<SpinnerIndicatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpinnerIndicatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpinnerIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
