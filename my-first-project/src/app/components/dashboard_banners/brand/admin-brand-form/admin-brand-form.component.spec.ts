import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBrandFormComponent } from './admin-brand-form.component';

describe('AdminBrandFormComponent', () => {
  let component: AdminBrandFormComponent;
  let fixture: ComponentFixture<AdminBrandFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminBrandFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBrandFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
