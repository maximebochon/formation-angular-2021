import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-formatting',
  templateUrl: './text-formatting.component.html',
  styleUrls: ['./text-formatting.component.css']
})
export class TextFormattingComponent implements OnInit {

  @Input() color = '#000000';
  @Input() sizeInPt = 16;
  @Input() fontFamily = 'sans-serif';

  constructor() { }

  ngOnInit(): void {
  }

}
