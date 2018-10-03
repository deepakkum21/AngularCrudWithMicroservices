import { TestBed, inject } from '@angular/core/testing';

import { EmployeeListResolverService } from './employee-list-resolver.service';

describe('EmployeeListResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmployeeListResolverService]
    });
  });

  it('should be created', inject([EmployeeListResolverService], (service: EmployeeListResolverService) => {
    expect(service).toBeTruthy();
  }));
});
