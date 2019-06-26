
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CrudMainNavComponent } from './crud-main-nav.component';

describe('CrudMainNavComponent', () => {
  let component: CrudMainNavComponent;
  let fixture: ComponentFixture<CrudMainNavComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [MatSidenavModule],
      declarations: [CrudMainNavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudMainNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
