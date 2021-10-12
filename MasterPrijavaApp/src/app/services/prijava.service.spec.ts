import { TestBed } from '@angular/core/testing';

import { PrijavaService } from './prijava.service';

describe('PrijavaService', () => {
  let service: PrijavaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrijavaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
