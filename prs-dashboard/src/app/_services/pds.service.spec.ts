import { TestBed, inject } from '@angular/core/testing';

import { PdsService } from './pds.service';

describe('PdsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PdsService]
    });
  });

  it('should be created', inject([PdsService], (service: PdsService) => {
    expect(service).toBeTruthy();
  }));
});
