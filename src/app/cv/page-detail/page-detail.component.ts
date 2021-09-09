import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cv } from '../model/cv.model';
import { CvService } from '../services/cv.service';
import { HireService } from '../services/hire.service';

@Component({
  selector: 'cv-page-detail',
  templateUrl: './page-detail.component.html',
  styleUrls: ['./page-detail.component.css']
})
export class PageDetailComponent implements OnInit {

  cv: Cv = new Cv();

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toaster: ToastrService,
    private cvService: CvService,
    private hireService: HireService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.cvService.findCvById(+params.id).subscribe(
          (cv) => this.cv = cv,
          (error) => {
            this.router.navigate(['/cv']);
          }
        );
      }
    );
  }

  removeCv() {
    this.cvService.deleteCv(this.cv.id).subscribe(
      (ok) => {
        this.toaster.success('Le cv de a été supprimé avec succès');
        this.router.navigate(['/cv']);
      },
      (error: HttpErrorResponse) => {
        this.toaster.success(error.message);
      }
    )
  }
}
