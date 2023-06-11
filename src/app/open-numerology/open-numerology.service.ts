import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NumerologyData } from '../models/numerology.model';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class OpenNumerologyService {

  constructor( private http: HttpClient ) { }

  getNumerologyData(number: string): Observable<NumerologyData>{

    const url = 'https://horoscope-astrology.p.rapidapi.com/numerology?';
        const headers = new HttpHeaders({
        'X-RapidAPI-Key': '5016ac0ebdmsha06ee5d995fe2c4p108e0fjsn03c8c4f21287',
        'X-RapidAPI-Host': 'horoscope-astrology.p.rapidapi.com'
    });
    const params = new HttpParams()
      .set('n', number.toLowerCase());

    return this.http.get<NumerologyData>(url, {headers, params});
  }
  
}
