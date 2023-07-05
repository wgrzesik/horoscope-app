import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { HoroscopeData } from '../models/horoscope.model';
import * as alertifyjs from 'alertifyjs';
import { env } from 'env';

@Injectable({
  providedIn: 'root'
})
export class OpenHoroscopeService {

  constructor( private http: HttpClient ) { }

  getHoroscopeData(location: string): Observable<HoroscopeData>{

    const url = 'https://horoscope-astrology.p.rapidapi.com/sign?';
    const headers = new HttpHeaders({
        //'X-RapidAPI-Key': '5016ac0ebdmsha06ee5d995fe2c4p108e0fjsn03c8c4f21287',
        'X-RapidAPI-Key': env.API_KEY,
        'X-RapidAPI-Host': 'horoscope-astrology.p.rapidapi.com'
    });
    const params = new HttpParams()
      .set('s', location.toLowerCase());

    return this.http.get<HoroscopeData>(url, {headers, params})
    .pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    let errormessage = '';
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
        errormessage = `Backend returned code ${error.status},\n`, error.error;
    }
    errormessage += 'Something bad happened; please try again later.';
    alertifyjs.error(errormessage);
    return throwError(() => new Error(errormessage));
  }
  
}

