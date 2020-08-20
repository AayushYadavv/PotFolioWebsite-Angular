import { TestBed } from '@angular/core/testing';

import { AuthDatabaseGuard } from './auth-database.guard';

describe('AuthDatabaseGuard', () => {
  let guard: AuthDatabaseGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthDatabaseGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
