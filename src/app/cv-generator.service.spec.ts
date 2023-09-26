import { TestBed } from '@angular/core/testing';

import { CvGeneratorService } from './cv-generator.service';

describe('CvGeneratorService', () => {
  let service: CvGeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CvGeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
