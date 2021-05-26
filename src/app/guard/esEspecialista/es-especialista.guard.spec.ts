import { TestBed } from '@angular/core/testing';

import { EsEspecialistaGuard } from './es-especialista.guard';

describe('EsEspecialistaGuard', () => {
  let guard: EsEspecialistaGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EsEspecialistaGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
