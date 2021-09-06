import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  isHidden = false;

  message = "";

  constructor() { }

  ngOnInit(): void {
  }

  toggle(): void
  {
    this.isHidden = !this.isHidden;
  }

  changeMessage(newMessage: string): void
  {
    this.message = newMessage;
  }
}
