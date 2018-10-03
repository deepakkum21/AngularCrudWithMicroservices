import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeContentProjectionComponent } from './employee-content-projection.component';

describe('EmployeeContentProjectionComponent', () => {
  let component: EmployeeContentProjectionComponent;
  let fixture: ComponentFixture<EmployeeContentProjectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeContentProjectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeContentProjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
