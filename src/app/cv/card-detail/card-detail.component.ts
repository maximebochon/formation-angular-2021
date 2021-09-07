import { Component, Input, OnInit } from '@angular/core';
import { Cv } from '../model/cv.model';

@Component({
  selector: 'cv-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent implements OnInit {

  @Input() cv: Cv = new Cv();

  constructor() { }

  ngOnInit(): void {
  }

}
