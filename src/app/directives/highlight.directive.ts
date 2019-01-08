import {Directive, ElementRef, Renderer2, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {
  @Input('appHighlight') dt: Date;

  constructor(private el: ElementRef, private renderer: Renderer2) {

  }

  ngOnInit() {
    this.highLightBorder(this.dt);
  }

  private highLightBorder(dt: Date): void {
    const curDt: Date = new Date();
    const brd: string = (dt && (curDt.getTime() -  dt.getTime()) > 0 && (curDt.getTime() - dt.getTime()) / 1000 / 60 / 60 / 24 <= 14  )
      ? '10px solid green'
      : (dt && dt > curDt)
        ? '10px solid blue'
        : '';
    this.renderer.setStyle(this.el.nativeElement, 'border-right', brd);
  }

}
