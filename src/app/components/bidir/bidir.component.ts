import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bidir',
  templateUrl: './bidir.component.html',
  styleUrls: ['./bidir.component.css']
})
export class BidirComponent implements OnInit {

  color: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
