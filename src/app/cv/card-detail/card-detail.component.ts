import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
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
    private hireService: HireService,
    private toaster: ToastrService
  ) { }

  ngOnInit(): void {
  }

  hire() {
    if(!this.hireService.hire(this.cv)) {
      this.toaster.warning(`CV for ${this.cv.lastname.toUpperCase()} already hired.`);
    }
  }

  isHired() {
    return this.hireService.isHired(this.cv);
  }
}
