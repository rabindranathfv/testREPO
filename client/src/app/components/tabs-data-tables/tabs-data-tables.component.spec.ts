import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsDataTablesComponent } from './tabs-data-tables.component';

describe('TabsDataTablesComponent', () => {
  let component: TabsDataTablesComponent;
  let fixture: ComponentFixture<TabsDataTablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsDataTablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsDataTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
