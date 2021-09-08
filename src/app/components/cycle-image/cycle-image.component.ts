import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cycle-image',
  templateUrl: './cycle-image.component.html',
  styleUrls: ['./cycle-image.component.css']
})
export class CycleImageComponent implements OnInit {

  @Input() intervalInMs = 1500;

  imageSource: string = '';

  imageSourceList: string[] = [
    'https://upload.wikimedia.org/wikipedia/commons/6/6a/Johann_Sebastian_Bach.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/1/1b/Antonio_Vivaldi.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/c/c4/Francois_Couperin_2.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/9/98/Attribu%C3%A9_%C3%A0_Joseph_Aved%2C_Portrait_de_Jean-Philippe_Rameau_%28vers_1728%29_-_001.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/8/85/Paul_Mignard_-_Jean-Baptiste_Lully.jpg'
  ];

  constructor() { }

  ngOnInit(): void {

    const imageCycler = new Observable<number>((observer) => {
      var index = 0;
      observer.next(index);
      setInterval(() => {
        ++index;
        index %= this.imageSourceList.length;
        observer.next(index);
      }, this.intervalInMs);
    });

    imageCycler.subscribe((index: number) => {
      console.log(`Show image ${index+1}/${this.imageSourceList.length}`);
      this.imageSource = this.imageSourceList[index];
    });
  }

}
