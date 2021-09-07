import { Component, OnInit } from '@angular/core';
import { Cv } from '../model/cv.model';
import { HireService } from '../services/hire.service';

@Component({
  selector: 'cv-hire',
  templateUrl: './hire.component.html',
  styleUrls: ['./hire.component.css']
})
export class HireComponent implements OnInit {

  hiredList: Cv[] = [];

  constructor(
    private hireService: HireService
  ) { }

  ngOnInit(): void {
    this.hiredList = this.hireService.getList();
  }

  remove(cv: Cv) {
    this.hireService.remove(cv);
  }
}
