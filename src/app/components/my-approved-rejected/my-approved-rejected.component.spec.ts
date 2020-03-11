import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyApprovedRejectedComponent } from './my-approved-rejected.component';

describe('MyApprovedRejectedComponent', () => {
  let component: MyApprovedRejectedComponent;
  let fixture: ComponentFixture<MyApprovedRejectedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyApprovedRejectedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyApprovedRejectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
