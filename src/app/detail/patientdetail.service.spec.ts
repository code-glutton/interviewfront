import { TestBed } from '@angular/core/testing';

import { PatientdetailService } from './patientdetail.service';

describe('PatientdetailService', () => {
  let service: PatientdetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatientdetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
