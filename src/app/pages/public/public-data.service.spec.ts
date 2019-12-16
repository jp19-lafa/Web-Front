import { TestBed } from '@angular/core/testing';

import { PublicDataService } from './public-data.service';

describe('PublicDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PublicDataService = TestBed.get(PublicDataService);
    expect(service).toBeTruthy();
  });
});
