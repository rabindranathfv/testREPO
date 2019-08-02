import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadFileAreaComponent } from './upload-file-area.component';

describe('UploadFileAreaComponent', () => {
  let component: UploadFileAreaComponent;
  let fixture: ComponentFixture<UploadFileAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadFileAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadFileAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
