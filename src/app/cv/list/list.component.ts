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
      new Cv(3, 'François', 'COUPERIN', 1668, 'https://upload.wikimedia.org/wikipedia/commons/c/c4/Francois_Couperin_2.jpg'),
      new Cv(4, 'Jean-Philippe', 'RAMEAU', 1683, 'https://upload.wikimedia.org/wikipedia/commons/9/98/Attribu%C3%A9_%C3%A0_Joseph_Aved%2C_Portrait_de_Jean-Philippe_Rameau_%28vers_1728%29_-_001.jpg'),
      new Cv(4, 'Jean-Baptiste', 'LULLY', 1632, 'https://upload.wikimedia.org/wikipedia/commons/8/85/Paul_Mignard_-_Jean-Baptiste_Lully.jpg')
    ]
  }

  forwardCv(cv: Cv): void {
    this.forwardSelectedCv.emit(cv);
  }

}
