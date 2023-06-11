import { Component, OnInit } from '@angular/core';
import { OpenNumerologyService } from '../open-numerology/open-numerology.service';
import { NumerologyData } from '../models/numerology.model';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-numerology',
  templateUrl: './numerology.component.html',
  styleUrls: ['./numerology.component.css']
})
export class NumerologyComponent implements OnInit{

  public number: string = '7'
  public numerologyData?: NumerologyData

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
      }
    });
  }

}
