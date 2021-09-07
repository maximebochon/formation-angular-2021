import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Cv } from '../model/cv.model';
import { CvService } from '../services/cv.service';

@Component({
  selector: 'cv-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  cvList: Cv[] = [];

  @Output() forwardSelectedCv = new EventEmitter();

  constructor(
    private cvService: CvService
  ) { }

  ngOnInit(): void {
    this.cvList = this.cvService.getList();
  }

  forwardCv(cv: Cv): void {
    this.forwardSelectedCv.emit(cv);
  }

}
