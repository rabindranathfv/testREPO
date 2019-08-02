import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalsHeaderComponent } from './modals-header.component';

describe('ModalsHeaderComponent', () => {
  let component: ModalsHeaderComponent;
  let fixture: ComponentFixture<ModalsHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalsHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
