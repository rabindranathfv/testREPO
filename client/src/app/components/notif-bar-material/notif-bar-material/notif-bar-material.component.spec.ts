import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifBarMaterialComponent } from './notif-bar-material.component';

describe('NotifBarMaterialComponent', () => {
  let component: NotifBarMaterialComponent;
  let fixture: ComponentFixture<NotifBarMaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotifBarMaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotifBarMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
