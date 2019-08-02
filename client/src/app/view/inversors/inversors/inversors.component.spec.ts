import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InversorsComponent } from './inversors.component';

describe('InversorsComponent', () => {
  let component: InversorsComponent;
  let fixture: ComponentFixture<InversorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InversorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InversorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
