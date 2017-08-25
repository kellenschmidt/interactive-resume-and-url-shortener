import { TestBed, inject } from '@angular/core/testing';

import { CardRepositoryService } from './card-repository.service';

describe('CardRepositoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CardRepositoryService]
    });
  });

  it('should be created', inject([CardRepositoryService], (service: CardRepositoryService) => {
    expect(service).toBeTruthy();
  }));
});
