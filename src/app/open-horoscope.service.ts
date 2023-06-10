import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HoroscopeData } from './models/horoscope.model';

@Injectable({
  providedIn: 'root'
})
export class OpenHoroscopeService {

  constructor( private http: HttpClient ) { }

  getHoroscopeData(location: string): Observable<HoroscopeData>{

    const url = 'https://horoscope-astrology.p.rapidapi.com/sign?';
    const headers = new HttpHeaders({
        'X-RapidAPI-Key': '5016ac0ebdmsha06ee5d995fe2c4p108e0fjsn03c8c4f21287',
        'X-RapidAPI-Host': 'horoscope-astrology.p.rapidapi.com'
    });
    const params = new HttpParams()
      .set('s', location.toLowerCase());

    return this.http.get<HoroscopeData>(url, {headers, params});
  }
  
}

