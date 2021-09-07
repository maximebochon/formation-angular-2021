import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cv } from '../model/cv.model';

@Component({
  selector: 'cv-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() cv: Cv = new Cv();
  @Output() sendSelectedCv = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  selectCv(): void {
    this.sendSelectedCv.emit(this.cv);
  }
}
