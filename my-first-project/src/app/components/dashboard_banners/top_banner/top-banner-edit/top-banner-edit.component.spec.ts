import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopBannerEditComponent } from './top-banner-edit.component';

describe('TopBannerEditComponent', () => {
  let component: TopBannerEditComponent;
  let fixture: ComponentFixture<TopBannerEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopBannerEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopBannerEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
