import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyApprovedComponent } from './my-approved.component';

describe('MyApprovedComponent', () => {
  let component: MyApprovedComponent;
  let fixture: ComponentFixture<MyApprovedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyApprovedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyApprovedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
