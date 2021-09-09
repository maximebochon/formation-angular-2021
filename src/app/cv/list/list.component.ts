import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Cv } from '../model/cv.model';
import { CvService } from '../services/cv.service';

@Component({
  selector: 'cv-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  cvList: Cv[] = [];

  constructor(
    private cvService: CvService,
    private toaster: ToastrService
  ) { }

  ngOnInit(): void {
    this.cvService.getObservable().subscribe(
      (cvList: Cv[]) => this.cvList = cvList,
      (error) => {
        console.log("HTTP ERROR:", error);
        this.toaster.warning(`Can't get remote data. Using mock data instead.`);
        this.cvList = this.cvService.getMockList();
      }
    );
  }
}
