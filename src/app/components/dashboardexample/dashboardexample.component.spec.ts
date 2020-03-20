import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardexampleComponent } from './dashboardexample.component';

describe('DashboardexampleComponent', () => {
  let component: DashboardexampleComponent;
  let fixture: ComponentFixture<DashboardexampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardexampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardexampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
