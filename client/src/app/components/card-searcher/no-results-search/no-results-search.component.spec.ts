import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoResultsSearchComponent } from './no-results-search.component';

describe('NoResultsSearchComponent', () => {
  let component: NoResultsSearchComponent;
  let fixture: ComponentFixture<NoResultsSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoResultsSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoResultsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
