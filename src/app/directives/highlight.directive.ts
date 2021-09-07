import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[customHighlight]'
})
export class HighlightDirective implements OnInit {
  @Input() colorIn = 'yellow';
  @Input() colorOut = 'black';

  @HostBinding('style.backgroundColor')
  bgColor = '';

  constructor() { }

  ngOnInit(): void {
    this.bgColor = this.colorOut;
  }

  @HostListener('mouseenter')
  onMouseEnter(): void
  {
    this.bgColor = this.colorIn;
  }

  @HostListener('mouseleave')
  onMouseLeave(): void
  {
    this.bgColor = this.colorOut;
  }
}
