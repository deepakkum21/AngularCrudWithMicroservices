import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeNotFoundComponent } from './employee-not-found.component';

describe('EmployeeNotFoundComponent', () => {
  let component: EmployeeNotFoundComponent;
  let fixture: ComponentFixture<EmployeeNotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeNotFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
