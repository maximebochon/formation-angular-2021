import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RemoteCv } from '../model/remote-cv.model';
import { CvService } from '../services/cv.service';

@Component({
  selector: 'cv-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(
    private cvService: CvService,
    private router: Router,
    private toaster: ToastrService
  ) { }

  ngOnInit(): void {
  }

  addCv(remoteCv: RemoteCv) {
    this.cvService.addCv(remoteCv).subscribe(
      (remoteCv) => {
        this.toaster.success(`Le CV de ${remoteCv.firstname} ${remoteCv.name} a été ajouté avec succes.`)
        this. router.navigate(['cv']);
      },
      (error: HttpErrorResponse) => {
        this.toaster.error(error.message);
      }
    )
  }
}
