import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomBannerDetailsComponent } from './bottom-banner-details.component';

describe('BottomBannerDetailsComponent', () => {
  let component: BottomBannerDetailsComponent;
  let fixture: ComponentFixture<BottomBannerDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottomBannerDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomBannerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
