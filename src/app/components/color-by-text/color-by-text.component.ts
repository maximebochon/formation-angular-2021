import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-color-by-text',
  templateUrl: './color-by-text.component.html',
  styleUrls: ['./color-by-text.component.css']
})
export class ColorByTextComponent implements OnInit {

  defaultColor: string = 'gray';
  bgColor: string = '';

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params) => {
        if (params.color) {
          this.defaultColor = params.color;
          this.changeColor(this.defaultColor);
        }
      }
    );
  }

  changeColor(newColor: string): void {
    this.bgColor = newColor;
  }

}
