import { Component, Input, OnInit } from '@angular/core';
import { Cv } from '../model/cv.model';

@Component({
  selector: 'cv-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  @Input() selectedCv: Cv = new Cv();

  constructor() { }

  ngOnInit(): void {
  }
  
  selectCv(newCv: Cv): void {
    this.selectedCv = newCv;
  }
}
