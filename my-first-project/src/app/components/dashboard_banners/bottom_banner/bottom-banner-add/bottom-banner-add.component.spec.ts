import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomBannerAddComponent } from './bottom-banner-add.component';

describe('BottomBannerAddComponent', () => {
  let component: BottomBannerAddComponent;
  let fixture: ComponentFixture<BottomBannerAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottomBannerAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomBannerAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
