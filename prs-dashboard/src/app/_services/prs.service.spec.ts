import { TestBed, inject } from '@angular/core/testing';

import { PrsService } from './prs.service';

describe('PrsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PrsService]
    });
  });

  it('should be created', inject([PrsService], (service: PrsService) => {
    expect(service).toBeTruthy();
  }));
});
