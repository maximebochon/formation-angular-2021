import { Component, Input, OnInit } from '@angular/core';
import { Logger } from 'src/app/services/logger.service';
import { Cv } from '../model/cv.model';

@Component({
  selector: 'cv-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  @Input() selectedCv: Cv = new Cv();

  constructor(
    private logger: Logger
  ) { }

  ngOnInit(): void {
  }
  
  selectCv(newCv: Cv): void {
    this.logger.log(newCv);
    this.selectedCv = newCv;
  }
}
