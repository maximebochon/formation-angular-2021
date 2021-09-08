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
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params) => {
        const found = this.cvService.findCvById(+params.id);
        if (found) {
          this.cv = found;
        }
        else {
          this.router.navigate(['/cv']);
        }
      }
    );
  }

  removeCv()
  {
    this.cvService.remove(this.cv);
    this.hireService.remove(this.cv);
    this.router.navigate(['/cv']);
  }
}
