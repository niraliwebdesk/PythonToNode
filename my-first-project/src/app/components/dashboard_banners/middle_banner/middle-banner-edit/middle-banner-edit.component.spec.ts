import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddleBannerEditComponent } from './middle-banner-edit.component';

describe('MiddleBannerEditComponent', () => {
  let component: MiddleBannerEditComponent;
  let fixture: ComponentFixture<MiddleBannerEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiddleBannerEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiddleBannerEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
