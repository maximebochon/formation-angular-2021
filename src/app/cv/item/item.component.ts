import { Component, Input, OnInit } from '@angular/core';
import { Cv } from '../model/cv.model';
import { CvService } from '../services/cv.service';

@Component({
  selector: 'cv-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() cv: Cv = new Cv();
  
  constructor(
    private cvService: CvService
  ) { }

  ngOnInit(): void {
  }

  selectCv(): void {
    this.cvService.selectCv(this.cv);
  }
}
