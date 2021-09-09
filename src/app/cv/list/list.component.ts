import { Component, OnInit } from '@angular/core';
import { Cv } from '../model/cv.model';
import { CvService } from '../services/cv.service';

@Component({
  selector: 'cv-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  cvList: Cv[] = [];

  constructor(
    private cvService: CvService
  ) { }

  ngOnInit(): void {
    this.cvList = this.cvService.getList();
  }
}
