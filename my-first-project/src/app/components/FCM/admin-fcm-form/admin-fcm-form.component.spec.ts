import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFcmFormComponent } from './admin-fcm-form.component';

describe('AdminFcmFormComponent', () => {
  let component: AdminFcmFormComponent;
  let fixture: ComponentFixture<AdminFcmFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminFcmFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminFcmFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
