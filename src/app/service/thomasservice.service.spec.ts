import { TestBed } from '@angular/core/testing';

import { ThomasserviceService } from './thomasservice.service';

describe('ThomasserviceService', () => {
  let service: ThomasserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThomasserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
