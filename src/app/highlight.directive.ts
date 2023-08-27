import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  @HostListener('mouseenter') onMouseOver() {
    this.backgroundColor = this.highlightColor;
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor = this.defaultColor;
  }

  @HostBinding('style.backgroundColor') backgroundColor = 'white';

  @Input() defaultColor = 'white';
  @Input('appHighlight') highlightColor = 'yellow';

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }
}
