import { TestBed, inject } from '@angular/core/testing';

import { ContentRepositoryService } from './content-repository.service';

describe('CardRepositoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContentRepositoryService]
    });
  });

  it('should be created', inject([ContentRepositoryService], (service: ContentRepositoryService) => {
    expect(service).toBeTruthy();
  }));
});
