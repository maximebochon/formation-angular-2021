import { Injectable } from '@angular/core';
import { Logger } from 'src/app/services/logger.service';
import { Cv } from '../model/cv.model';

@Injectable({
  providedIn: 'root'
})
export class CvService {

  private cvList: Cv[] = [];

  constructor(
    private logger: Logger
  ) {
    var index = 1;
    this.cvList = [
      new Cv(this.createId(index++), 'johann sebastian', 'bach', 1685, 'https://upload.wikimedia.org/wikipedia/commons/6/6a/Johann_Sebastian_Bach.jpg'),
      new Cv(this.createId(index++), 'antonio', 'vivaldi', 1678, 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Antonio_Vivaldi.jpg'),
      new Cv(this.createId(index++), 'françois', 'couperin', 1668, 'https://upload.wikimedia.org/wikipedia/commons/c/c4/Francois_Couperin_2.jpg'),
      new Cv(this.createId(index++), 'jean-philippe', 'rameau', 1683, 'https://upload.wikimedia.org/wikipedia/commons/9/98/Attribu%C3%A9_%C3%A0_Joseph_Aved%2C_Portrait_de_Jean-Philippe_Rameau_%28vers_1728%29_-_001.jpg'),
      new Cv(this.createId(index++), 'jean-baptiste', 'lully', 1632, 'https://upload.wikimedia.org/wikipedia/commons/8/85/Paul_Mignard_-_Jean-Baptiste_Lully.jpg'),
      new Cv(this.createId(index++), 'path test', 'null', 1001, null),
      new Cv(this.createId(index++), 'path test', 'empty', 1002, ''),
      new Cv(this.createId(index++), 'path test', 'spaces', 1003, '   ')
    ];
  }

  createId(index: number): number {
    return index * 100;
  }

  getList(): Cv[] {
    return this.cvList;
  }

  findCvById(id: number): Cv|undefined {
    return this.cvList.find((cv) => cv.id === id);
  }

  remove(cv: Cv): boolean {
    const index = this.cvList.indexOf(cv);
    if (index < 0) return false;
    this.cvList.splice(index, 1);
    return true;
  }

  log(): void {
    this.logger.log(this.cvList);
  }
}
