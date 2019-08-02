import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideFormComponent } from './aside-form.component';

describe('AsideFormComponent', () => {
  let component: AsideFormComponent;
  let fixture: ComponentFixture<AsideFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsideFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsideFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
