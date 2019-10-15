import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FcmAddComponent } from './fcm-add.component';

describe('FcmAddComponent', () => {
  let component: FcmAddComponent;
  let fixture: ComponentFixture<FcmAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FcmAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FcmAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
