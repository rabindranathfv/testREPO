import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlCellsComponent } from './url-cells.component';

describe('UrlCellsComponent', () => {
  let component: UrlCellsComponent;
  let fixture: ComponentFixture<UrlCellsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrlCellsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrlCellsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
