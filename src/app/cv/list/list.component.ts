import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Cv } from '../model/cv.model';

@Component({
  selector: 'cv-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  cvList: Cv[] = [];

  @Output() forwardSelectedCv = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.cvList = [
      new Cv(1, 'Johann Sebastian', 'BACH', 1685, 'https://upload.wikimedia.org/wikipedia/commons/6/6a/Johann_Sebastian_Bach.jpg'),
      new Cv(2, 'Antonio', 'VIVALDI', 1678, 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Antonio_Vivaldi.jpg'),
      new Cv(3, 'François', 'COUPERIN', 1668, 'https://upload.wikimedia.org/wikipedia/commons/c/c4/Francois_Couperin_2.jpg')
    ]
  }

  forwardCv(cv: Cv): void {
    this.forwardSelectedCv.emit(cv);
  }

}
