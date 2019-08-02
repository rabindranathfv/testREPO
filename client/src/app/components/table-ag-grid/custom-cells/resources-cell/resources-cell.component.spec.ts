import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourcesCellComponent } from './resources-cell.component';

describe('ResourcesCellComponent', () => {
  let component: ResourcesCellComponent;
  let fixture: ComponentFixture<ResourcesCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourcesCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourcesCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
