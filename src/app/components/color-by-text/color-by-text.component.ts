import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-by-text',
  templateUrl: './color-by-text.component.html',
  styleUrls: ['./color-by-text.component.css']
})
export class ColorByTextComponent implements OnInit {

  DEFAULT_COLOR: string = "gray";
  bgColor: string = this.DEFAULT_COLOR;

  constructor() { }

  ngOnInit(): void {

  }

  changeColor(newColor: string): void {
    this.bgColor = newColor;
  }

}
