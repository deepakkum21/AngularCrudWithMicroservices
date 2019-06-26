import { TestBed, inject } from '@angular/core/testing';

import { EmpoloyeeService } from './empoloyee.service';

describe('EmpoloyeeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmpoloyeeService]
    });
  });

  it('should be created', inject([EmpoloyeeService], (service: EmpoloyeeService) => {
    expect(service).toBeTruthy();
  }));
});
