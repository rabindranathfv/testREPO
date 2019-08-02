import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicsFiltersComponent } from './graphics-filters.component';

describe('GraphicsFiltersComponent', () => {
  let component: GraphicsFiltersComponent;
  let fixture: ComponentFixture<GraphicsFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphicsFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphicsFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
