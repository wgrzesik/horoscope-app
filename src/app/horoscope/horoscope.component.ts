import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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

  @Input()

  public horoscopeData?: HoroscopeData;

  @Output()
  public sunSign: string = 'Libra'


  constructor(
    ) { }

    onSubmit() {

    }
    ngOnInit(): void {
    }

}
