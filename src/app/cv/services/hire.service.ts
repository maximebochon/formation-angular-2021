import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Logger } from 'src/app/services/logger.service';
import { Cv } from '../model/cv.model';

@Injectable({
  providedIn: 'root'
})
export class HireService {

  cvList: Cv[] = [];

  constructor(
    private logger: Logger,
    private toaster: ToastrService
  ) {}

  log(): void {
    this.logger.log(this.cvList);
  }

  getList(): Cv[] {
    return this.cvList;
  }

  hire(cv: Cv): void {
    if (this.cvList.indexOf(cv) < 0) {
      this.cvList.push(cv);
    } else {
      this.toaster.warning(`CV for ${cv.lastname.toUpperCase()} already hired.`);
    }
  }

  isHired(cv: Cv): boolean {
    return (this.cvList.indexOf(cv) >= 0);
  }

  remove(cv: Cv): void {
    const index = this.cvList.indexOf(cv);
    this.cvList.splice(index, 1);
  }
}
