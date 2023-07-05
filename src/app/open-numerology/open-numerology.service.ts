import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NumerologyData } from '../models/numerology.model';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, throwError } from 'rxjs';
import * as alertifyjs from 'alertifyjs';
import { DefinePlugin, webpack } from 'webpack';
import { env } from 'env';

@Injectable({
  providedIn: 'root'
})
export class OpenNumerologyService {

  constructor( private http: HttpClient ) { }

  getNumerologyData(number: string): Observable<NumerologyData>{

    const url = 'https://horoscope-astrology.p.rapidapi.com/numerology?';
        const headers = new HttpHeaders({
        'X-RapidAPI-Key': env.API_KEY,
        'X-RapidAPI-Host': 'horoscope-astrology.p.rapidapi.com'
    });
    const params = new HttpParams()
      .set('n', number.toLowerCase());

    return this.http.get<NumerologyData>(url, {headers, params})
      .pipe(catchError(this.handleError));
    
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
