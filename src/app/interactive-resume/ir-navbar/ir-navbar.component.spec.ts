import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IRNavbarComponent } from './ir-navbar.component';

describe('IrNavbarComponent', () => {
  let component: IRNavbarComponent;
  let fixture: ComponentFixture<IRNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IRNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IRNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
