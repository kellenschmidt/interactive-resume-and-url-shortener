import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { USNavbarComponent } from './us-navbar.component';

describe('NavbarComponent', () => {
  let component: USNavbarComponent;
  let fixture: ComponentFixture<USNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ USNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(USNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
