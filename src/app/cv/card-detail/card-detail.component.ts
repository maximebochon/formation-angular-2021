import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cv } from '../model/cv.model';
import { CvService } from '../services/cv.service';
import { HireService } from '../services/hire.service';

@Component({
  selector: 'cv-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent implements OnInit {

  cv: Cv = new Cv();

  constructor(
    private cvService: CvService,
    private hireService: HireService,
    private toaster: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.cvService.selectCvSubject.subscribe(
      (cv: Cv) => { this.cv = cv; }
    );
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
