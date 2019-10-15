import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopBannerAddComponent } from './top-banner-add.component';

describe('TopBannerAddComponent', () => {
  let component: TopBannerAddComponent;
  let fixture: ComponentFixture<TopBannerAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopBannerAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopBannerAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
