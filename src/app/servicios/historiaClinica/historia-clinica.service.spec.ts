import { TestBed } from '@angular/core/testing';

import { HistoriaClinicaService } from './historia-clinica.service';

describe('HistoriaClinicaService', () => {
  let service: HistoriaClinicaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistoriaClinicaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
