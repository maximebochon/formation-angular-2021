import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cv } from '../model/cv.model';
import { HireService } from '../services/hire.service';

@Component({
  selector: 'cv-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent implements OnInit {

  @Input() cv: Cv = new Cv();

  constructor(
    private hireService: HireService
  ) { }

  ngOnInit(): void {
  }

  hire() {
    this.hireService.hire(this.cv);
  }

  isHired() {
    return this.hireService.isHired(this.cv);
  }
}
