import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { NumerologyComponent } from './numerology.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { OpenNumerologyService } from '../open-numerology/open-numerology.service';
import { NumerologyData } from '../models/numerology.model';
import { delay, of } from 'rxjs';
import { FormsModule } from '@angular/forms';

describe('NumerologyComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NumerologyComponent],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        FormsModule
      ],
      providers: [OpenNumerologyService]
    }).compileComponents();

  });

  it('should call getNumerologyData correctly', fakeAsync(() => {
    let fixture = TestBed.createComponent(NumerologyComponent);
    let component = fixture.componentInstance;
    let numerologyService = fixture.debugElement.injector.get(OpenNumerologyService);
    const dummyData: NumerologyData = {
      desc: 'numerology about number 1',
      number: '1',
    };
    let stub = spyOn(numerologyService, "getNumerologyData").and.callFake(() => {
      return of(dummyData).pipe(delay(300))
    });
    component.getNumerology();
    tick(300);
    
    expect(component.numerologyData).toEqual(dummyData);

  })
  );
});
