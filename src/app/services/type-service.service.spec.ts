import { TestBed } from '@angular/core/testing';

import { TypeService } from './type-service.service';

describe('TypeServiceService', () => {
  let service: TypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
