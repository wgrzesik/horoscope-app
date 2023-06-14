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
  errormessage: any

  constructor (private openNumerologyService: OpenNumerologyService) {}

  ngOnInit(): void {
    this.getNumerology();
    this.number= '';
  }

  onSubmitNumber() {
    this.getNumerology();
    this.number = '';
  }

  getNumerology() {
    this.openNumerologyService.getNumerologyData(this.number)
    .subscribe({
      next: (response) => {
        this.numerologyData = response;
        console.log(response);
      },
      error: (error) => {
        this.errormessage = error;
      }
    });
  }

}
