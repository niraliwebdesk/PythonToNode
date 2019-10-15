import { TestBed } from '@angular/core/testing';

import { TopBannerService } from './top-banner.service';

describe('TopBannerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TopBannerService = TestBed.get(TopBannerService);
    expect(service).toBeTruthy();
  });
});
