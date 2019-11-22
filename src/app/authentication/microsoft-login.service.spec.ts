import { TestBed } from '@angular/core/testing';

import { MicrosoftLoginService } from './microsoft-login.service';

describe('MicrosoftLoginService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MicrosoftLoginService = TestBed.get(MicrosoftLoginService);
    expect(service).toBeTruthy();
  });
});
