import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FcmEditComponent } from './fcm-edit.component';

describe('FcmEditComponent', () => {
  let component: FcmEditComponent;
  let fixture: ComponentFixture<FcmEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FcmEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FcmEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
