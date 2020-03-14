import { TestBed } from '@angular/core/testing';

import { TripTypesService } from './trip-types.service';

describe('TripTypesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TripTypesService = TestBed.get(TripTypesService);
    expect(service).toBeTruthy();
  });
});
