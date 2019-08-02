import { TestBed } from '@angular/core/testing';

import { PanelsInvertersService } from './panels-inverters.service';

describe('PanelsInvertersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PanelsInvertersService = TestBed.get(PanelsInvertersService);
    expect(service).toBeTruthy();
  });
});
