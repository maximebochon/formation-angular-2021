import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private toaster: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  hire(): void {
    if(!this.hireService.hire(this.cv)) {
      this.toaster.warning(`CV for ${this.cv.lastname.toUpperCase()} already hired.`);
    }
  }

  isHired(): boolean {
    return this.hireService.isHired(this.cv);
  }

  showDetails(): void {
    this.router.navigate(['cv', this.cv.id]);
  }
}
