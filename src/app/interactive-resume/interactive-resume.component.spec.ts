import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractiveResumeComponent } from './interactive-resume.component';

describe('InteractiveResumeComponent', () => {
  let component: InteractiveResumeComponent;
  let fixture: ComponentFixture<InteractiveResumeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InteractiveResumeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InteractiveResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
