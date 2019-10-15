import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddleBannerAddComponent } from './middle-banner-add.component';

describe('MiddleBannerAddComponent', () => {
  let component: MiddleBannerAddComponent;
  let fixture: ComponentFixture<MiddleBannerAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiddleBannerAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiddleBannerAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
