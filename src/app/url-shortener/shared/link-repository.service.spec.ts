import { TestBed, inject } from '@angular/core/testing';

import { LinkRepositoryService } from './link-repository.service';

describe('LinkRepositoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LinkRepositoryService]
    });
  });

  it('should be created', inject([LinkRepositoryService], (service: LinkRepositoryService) => {
    expect(service).toBeTruthy();
  }));
});
