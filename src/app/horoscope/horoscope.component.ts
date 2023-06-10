import { Component, OnInit } from '@angular/core';
import { OpenHoroscopeService } from '../open-horoscope.service';
import { HoroscopeData } from '../models/horoscope.model';
import { faEarth, faFire, faCalendar} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-horoscope',
  templateUrl: './horoscope.component.html',
  styleUrls: ['./horoscope.component.css']
})

export class HoroscopeComponent implements OnInit {
  
  faGlobe = faEarth;
  faFire = faFire;
  faCalendar = faCalendar;

  constructor (private openHoroscopeService: OpenHoroscopeService) {

  }
  sunSign: string = 'Libra'
  horoscopeData?: HoroscopeData;

  ngOnInit(): void {
    this.getHoroscope(this.sunSign);
    this.sunSign = '';
  }

  onSubmit() {
    this.getHoroscope(this.sunSign);
    this.sunSign = '';
  }

  private getHoroscope(sunSign: string) {
    this.openHoroscopeService.getHoroscopeData(sunSign)
    .subscribe({
      next: (response) => {
        this.horoscopeData = response;
        console.log(response);
      }
    });
  }
}
