import { TestBed } from '@angular/core/testing';

import { SerbianTransliteratorService } from './serbian-transliterator.service';

describe('SerbianTransliteratorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SerbianTransliteratorService = TestBed.get(SerbianTransliteratorService);
    expect(service).toBeTruthy();
  });
});
