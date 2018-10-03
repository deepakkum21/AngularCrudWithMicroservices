import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRegisterDialogComponent } from './my-register-dialog.component';

describe('MyRegisterDialogComponent', () => {
  let component: MyRegisterDialogComponent;
  let fixture: ComponentFixture<MyRegisterDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyRegisterDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyRegisterDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
