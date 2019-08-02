import { TestBed } from '@angular/core/testing';

import { PlantsInvertersService } from './plants-inverters.service';

describe('PlantsInvertersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlantsInvertersService = TestBed.get(PlantsInvertersService);
    expect(service).toBeTruthy();
  });
});
