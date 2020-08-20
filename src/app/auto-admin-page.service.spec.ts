import { TestBed } from '@angular/core/testing';

import { AutoAdminPageService } from './auto-admin-page.service';

describe('AutoAdminPageService', () => {
  let service: AutoAdminPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutoAdminPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
