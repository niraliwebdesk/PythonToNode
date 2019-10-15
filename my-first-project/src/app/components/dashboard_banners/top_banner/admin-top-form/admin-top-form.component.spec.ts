import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTopFormComponent } from './admin-top-form.component';

describe('AdminTopFormComponent', () => {
  let component: AdminTopFormComponent;
  let fixture: ComponentFixture<AdminTopFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTopFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTopFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
