import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable, Subject } from 'rxjs';
import { CONSTANTS } from 'src/app/constants';
import { Logger } from 'src/app/services/logger.service';
import { Cv } from '../model/cv.model';
import { RemoteCv } from '../model/remote-cv.model';
import { map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CvService {

  private cvMockList: Cv[] = [];

  selectCvSubject = new Subject<Cv>();

  constructor(
    private http: HttpClient,
    private logger: Logger
  ) {
    this.initMockData();
  }

  private initMockData() {
    var index = 1;
    this.cvMockList = [
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

  getObservable(): Observable<Cv[]> {
    return this.http.get<RemoteCv[]>(CONSTANTS.remoteDataApi)
      .pipe(
        map((remoteCvList) => remoteCvList.map(
          (remote: RemoteCv) => {
            let cv = new Cv();
            cv.id = remote.id;
            cv.firstname = remote.firstname;
            cv.lastname = remote.name;
            cv.birth = 2021 - remote.age; // TODO: get year from Date
            if(remote.path?.trim().length) {
              cv.picture = 'https://raw.githubusercontent.com/aymensellaouti/thalesGroupe/master/src/assets/images/' + remote.path;
            }
            return cv;
          }))
      );
  }

  getMockList(): Cv[] {
    return this.cvMockList;
  }

  findMockCvById(id: number): Cv|undefined {
    return this.cvMockList.find((cv) => cv.id === id);
  }

  findCvById(id: number): Observable<Cv> {
    return this.http.get<Cv>(CONSTANTS.remoteDataApi + id);
  }

  removeMockCv(cv: Cv): boolean {
    const index = this.cvMockList.indexOf(cv);
    if (index < 0) return false;
    this.cvMockList.splice(index, 1);
    return true;
  }

  selectCv(cv: Cv): void {
    this.selectCvSubject.next(cv);
  }
}
