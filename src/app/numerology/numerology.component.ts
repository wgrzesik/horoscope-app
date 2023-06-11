import { Component, OnInit } from '@angular/core';
import { OpenNumerologyService } from '../open-numerology/open-numerology.service';
import { NumerologyData } from '../models/numerology.model';

@Component({
  selector: 'app-numerology',
  templateUrl: './numerology.component.html',
  styleUrls: ['./numerology.component.css']
})
export class NumerologyComponent implements OnInit{

  public number: string = '7'
  public numerologyData?: NumerologyData

  constructor (private openNumerologyService: OpenNumerologyService) {

  }

  ngOnInit(): void {
    this.getHoroscope();
    this.number= '';
  }

  onSubmitNumber() {
    this.getHoroscope();
    this.number = '';
  }

  getHoroscope() {
    this.openNumerologyService.getNumerologyData(this.number)
    .subscribe({
      next: (response) => {
        this.numerologyData = response;
        console.log(response);
      }
    });
  }

}
