import { Component, OnInit } from '@angular/core';
import { HoroscopeData } from '../models/horoscope.model';
import { OpenHoroscopeService } from '../open-horoscope.service';
import { faEarth, faFire, faCalendar} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-horoscope-data-container',
  templateUrl: './horoscope-data-container.component.html',
  styleUrls: ['./horoscope-data-container.component.css']
})
export class HoroscopeDataContainerComponent implements OnInit {

  faGlobe = faEarth;
  faFire = faFire;
  faCalendar = faCalendar;

  public sunSign: string = 'Libra'
  public horoscopeData1?: HoroscopeData;
  public gender: string = 'woman';

  constructor (private openHoroscopeService: OpenHoroscopeService) {

  }

  ngOnInit(): void {
    this.getHoroscope();
    this.sunSign = '';
  }

  onSubmit() {
    this.getHoroscope();
    this.sunSign = '';
  }

  getHoroscope() {
    this.openHoroscopeService.getHoroscopeData(this.sunSign)
    .subscribe({
      next: (response) => {
        this.horoscopeData1 = response;
        console.log(response);
      }
    });
  }

    changeGender(newValue: string) {
      this.gender = newValue;
    }

}
