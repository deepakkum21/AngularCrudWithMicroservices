import { TestBed, inject } from '@angular/core/testing';

import { RegisteruseCanDeactivateService } from './registeruse-can-deactivate.service';

describe('RegisteruseCanDeactivateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegisteruseCanDeactivateService]
    });
  });

  it('should be created', inject([RegisteruseCanDeactivateService], (service: RegisteruseCanDeactivateService) => {
    expect(service).toBeTruthy();
  }));
});
