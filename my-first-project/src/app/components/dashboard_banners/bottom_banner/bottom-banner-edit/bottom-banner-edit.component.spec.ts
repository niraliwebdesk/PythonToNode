import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomBannerEditComponent } from './bottom-banner-edit.component';

describe('BottomBannerEditComponent', () => {
  let component: BottomBannerEditComponent;
  let fixture: ComponentFixture<BottomBannerEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottomBannerEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomBannerEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
