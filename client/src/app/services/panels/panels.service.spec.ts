import { TestBed } from '@angular/core/testing';

import { PanelsService } from './panels.service';

describe('PanelsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PanelsService = TestBed.get(PanelsService);
    expect(service).toBeTruthy();
  });
});
