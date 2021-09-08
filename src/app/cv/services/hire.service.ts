import { Injectable } from '@angular/core';
import { Logger } from 'src/app/services/logger.service';
import { Cv } from '../model/cv.model';

@Injectable({
  providedIn: 'root'
})
export class HireService {

  cvList: Cv[] = [];

  constructor(
    private logger: Logger
  ) {}

  log(): void {
    this.logger.log(this.cvList);
  }

  getList(): Cv[] {
    return this.cvList;
  }

  hire(cv: Cv): boolean {
    if (this.cvList.indexOf(cv) < 0) {
      this.cvList.push(cv);
      return true;
    } else {
      return false;
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
