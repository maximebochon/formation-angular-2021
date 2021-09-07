import { Component, Input, OnInit } from '@angular/core';
import { Logger } from 'src/app/services/logger.service';
import { Cv } from '../model/cv.model';
import { CvService } from '../services/cv.service';
import { HireService } from '../services/hire.service';

@Component({
  selector: 'cv-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  @Input() selectedCv: Cv = new Cv();

  constructor(
    private logger: Logger,
    private cvService: CvService,
    private hireService: HireService
  ) { }

  ngOnInit(): void {
  }
  
  selectCv(newCv: Cv): void {
    this.logger.log(newCv);
    this.selectedCv = newCv;
  }
}
