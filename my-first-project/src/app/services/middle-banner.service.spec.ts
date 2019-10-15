import { TestBed } from '@angular/core/testing';

import { MiddleBannerService } from './middle-banner.service';

describe('MiddleBannerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MiddleBannerService = TestBed.get(MiddleBannerService);
    expect(service).toBeTruthy();
  });
});
