import { TestBed } from '@angular/core/testing';

import { BottomBannerService } from './bottom-banner.service';

describe('BottomBannerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BottomBannerService = TestBed.get(BottomBannerService);
    expect(service).toBeTruthy();
  });
});
