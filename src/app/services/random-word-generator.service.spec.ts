import { TestBed } from '@angular/core/testing';

import { RandomWordGeneratorService } from './random-word-generator.service';

describe('RandomWordGeneratorService', () => {
  let service: RandomWordGeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandomWordGeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
