import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FcmDetailsComponent } from './fcm-details.component';

describe('FcmDetailsComponent', () => {
  let component: FcmDetailsComponent;
  let fixture: ComponentFixture<FcmDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FcmDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FcmDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
