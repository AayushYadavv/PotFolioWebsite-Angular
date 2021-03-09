import { TestBed } from '@angular/core/testing';

import { PwaServService } from './pwa-serv.service';

describe('PwaServService', () => {
  let service: PwaServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PwaServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
