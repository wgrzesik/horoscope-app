import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

import { OpenNumerologyService } from './open-numerology.service';
import { NumerologyData } from '../models/numerology.model';

describe('OpenNumerologyService', () => {
  let service: OpenNumerologyService;
  let httpMock: HttpTestingController;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [OpenNumerologyService]
    });
    service = TestBed.get(OpenNumerologyService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  })

  it('should retrive NumerologyData from the API via GET', () => {
    const dummyData: NumerologyData = {
      desc: 'numerology about number 1',
      number: '1',
    };
    const testNumber: string = '1';

    service.getNumerologyData(testNumber).subscribe(numerology => {
      expect(numerology).toEqual(dummyData)
    });

    const request = httpMock.expectOne('https://horoscope-astrology.p.rapidapi.com/numerology?n=1');

    expect(request.request.method).toBe('GET');

    request.flush(dummyData);
  })

});

