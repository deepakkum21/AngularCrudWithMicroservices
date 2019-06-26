import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterUserListAgGridComponent } from './register-user-list-ag-grid.component';

describe('RegisterUserListAgGridComponent', () => {
  let component: RegisterUserListAgGridComponent;
  let fixture: ComponentFixture<RegisterUserListAgGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterUserListAgGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterUserListAgGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
