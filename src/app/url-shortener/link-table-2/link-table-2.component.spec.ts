import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkTable2Component } from './link-table-2.component';

describe('LinkTable2Component', () => {
  let component: LinkTable2Component;
  let fixture: ComponentFixture<LinkTable2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkTable2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkTable2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
