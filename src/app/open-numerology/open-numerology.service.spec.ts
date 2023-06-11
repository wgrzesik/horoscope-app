import { TestBed } from '@angular/core/testing';

import { OpenNumerologyService } from './open-numerology.service';

describe('OpenNumerologyService', () => {
  let service: OpenNumerologyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpenNumerologyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
