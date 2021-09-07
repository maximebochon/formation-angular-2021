import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[rainbowTyping]'
})
export class RainbowTypingDirective {

  @HostBinding('style.color')
  textColor = '';

  @HostBinding('style.borderColor')
  borderColor = '';

  @HostBinding('style.borderWidth')
  borderWidth = '';

  constructor(private element: ElementRef) { }

  @HostListener('keypress')
  onKeyPress(): void {
    this.textColor = this.getRandomColor();
    this.borderColor = this.getRandomColor();
    this.borderWidth = this.getBorderWidth();
  }

  getRandomColor(): string {
    return '#'  + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1,6);
  }

  getBorderWidth(): string {
    return 10 + Math.floor(5 * Math.sin(this.element.nativeElement.value.length)) + 'px';
  }
}
