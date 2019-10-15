import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBottomFormComponent } from './admin-bottom-form.component';

describe('AdminBottomFormComponent', () => {
  let component: AdminBottomFormComponent;
  let fixture: ComponentFixture<AdminBottomFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminBottomFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBottomFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
