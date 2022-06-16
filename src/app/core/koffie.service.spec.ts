import { TestBed } from '@angular/core/testing';

import { KoffieService } from './koffie.service';

describe('KoffieService', () => {
  let service: KoffieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KoffieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
