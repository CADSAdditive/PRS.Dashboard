import { TestBed, inject } from '@angular/core/testing';

import { BcmService } from './bcm.service';

describe('BcmService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BcmService]
    });
  });

  it('should be created', inject([BcmService], (service: BcmService) => {
    expect(service).toBeTruthy();
  }));
});
