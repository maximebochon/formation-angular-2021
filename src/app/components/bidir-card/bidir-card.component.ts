import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bidir-card',
  templateUrl: './bidir-card.component.html',
  styleUrls: ['./bidir-card.component.css']
})
export class BidirCardComponent implements OnInit {

  firstname: string = 'Prénom';
  lastname: string = 'NOM';
  job: string = 'developer';

  constructor() { }

  ngOnInit(): void {
  }

}
