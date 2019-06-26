import { TestBed, inject } from '@angular/core/testing';

import { CreateEmployeeCanDeactivateGuardService } from './create-employee-can-deactivate-guard.service';

describe('CreateEmployeeCanDeactivateGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreateEmployeeCanDeactivateGuardService]
    });
  });

  it('should be created', inject([CreateEmployeeCanDeactivateGuardService], (service: CreateEmployeeCanDeactivateGuardService) => {
    expect(service).toBeTruthy();
  }));
});
