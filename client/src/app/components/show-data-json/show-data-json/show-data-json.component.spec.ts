import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDataJsonComponent } from './show-data-json.component';

describe('ShowDataJsonComponent', () => {
  let component: ShowDataJsonComponent;
  let fixture: ComponentFixture<ShowDataJsonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowDataJsonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDataJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
