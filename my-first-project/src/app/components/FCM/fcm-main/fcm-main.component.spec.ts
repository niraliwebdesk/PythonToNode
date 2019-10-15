import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FcmMainComponent } from './fcm-main.component';

describe('FcmMainComponent', () => {
  let component: FcmMainComponent;
  let fixture: ComponentFixture<FcmMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FcmMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FcmMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
