import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundDialogComponent } from './not-found-dialog.component';

describe('NotFoundComponent', () => {
  let component: NotFoundDialogComponent;
  let fixture: ComponentFixture<NotFoundDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotFoundDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFoundDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
