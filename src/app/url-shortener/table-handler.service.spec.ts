import { TestBed, inject } from '@angular/core/testing';

import { TableHandlerService } from './table-handler.service';

describe('TableHandlerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TableHandlerService]
    });
  });

  it('should be created', inject([TableHandlerService], (service: TableHandlerService) => {
    expect(service).toBeTruthy();
  }));
});
