import { TestBed } from '@angular/core/testing';

import { InversorsService } from './inversors.service';

describe('InversorsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InversorsService = TestBed.get(InversorsService);
    expect(service).toBeTruthy();
  });
});
