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
    var index = 0;
    this.cvList = [
      new Cv(++index, 'johann sebastian', 'bach', 1685, 'https://upload.wikimedia.org/wikipedia/commons/6/6a/Johann_Sebastian_Bach.jpg'),
      new Cv(++index, 'antonio', 'vivaldi', 1678, 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Antonio_Vivaldi.jpg'),
      new Cv(++index, 'françois', 'couperin', 1668, 'https://upload.wikimedia.org/wikipedia/commons/c/c4/Francois_Couperin_2.jpg'),
      new Cv(++index, 'jean-philippe', 'rameau', 1683, 'https://upload.wikimedia.org/wikipedia/commons/9/98/Attribu%C3%A9_%C3%A0_Joseph_Aved%2C_Portrait_de_Jean-Philippe_Rameau_%28vers_1728%29_-_001.jpg'),
      new Cv(++index, 'jean-baptiste', 'lully', 1632, 'https://upload.wikimedia.org/wikipedia/commons/8/85/Paul_Mignard_-_Jean-Baptiste_Lully.jpg'),
      new Cv(++index, 'path test', 'null', 1001, null),
      new Cv(++index, 'path test', 'empty', 1002, ''),
      new Cv(++index, 'path test', 'spaces', 1003, '   ')
    ];
  }

  getList(): Cv[] {
    return this.cvList;
  }

  log(): void {
    this.logger.log(this.cvList);
  }
}
