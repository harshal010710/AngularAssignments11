import { TestBed } from '@angular/core/testing';

import { ArithmeticService } from './arithmetic.service';

describe('ArithmeticService', () => {
  let service: ArithmeticService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArithmeticService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
