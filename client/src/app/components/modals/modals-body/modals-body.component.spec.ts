import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalsBodyComponent } from './modals-body.component';

describe('ModalsBodyComponent', () => {
  let component: ModalsBodyComponent;
  let fixture: ComponentFixture<ModalsBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalsBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalsBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
