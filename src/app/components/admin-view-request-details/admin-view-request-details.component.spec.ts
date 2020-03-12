import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewRequestDetailsComponent } from './admin-view-request-details.component';

describe('AdminViewRequestDetailsComponent', () => {
  let component: AdminViewRequestDetailsComponent;
  let fixture: ComponentFixture<AdminViewRequestDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminViewRequestDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminViewRequestDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
