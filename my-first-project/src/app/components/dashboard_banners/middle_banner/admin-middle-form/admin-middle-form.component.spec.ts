import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMiddleFormComponent } from './admin-middle-form.component';

describe('AdminMiddleFormComponent', () => {
  let component: AdminMiddleFormComponent;
  let fixture: ComponentFixture<AdminMiddleFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminMiddleFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMiddleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
