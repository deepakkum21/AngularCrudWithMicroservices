
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardDemoComponent } from './dashboard-demo.component';

describe('DashboardDemoComponent', () => {
  let component: DashboardDemoComponent;
  let fixture: ComponentFixture<DashboardDemoComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
