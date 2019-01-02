import {Directive, ElementRef, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input('appHighlight') dt: Date;
  @Input() title: string;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    console.log('this.dt', this.dt);
    console.log('this.title', this.title);
    this.highLightBorder(this.dt);
  }

  private highLightBorder(dt: Date): void {
    const curDt: Date = new Date();
    const brd: string = (dt && (curDt.getTime() -  dt.getTime()) > 0 && (curDt.getTime() - dt.getTime()) / 1000 / 60 / 60 / 24 <= 14  )
      ? '10px solid green'
      : (dt && dt > curDt)
        ? '10px solid blue'
        : '';
    console.log('dt', dt);
    console.log('curdt', curDt);
    console.log('brd', brd);
    this.renderer.setStyle(this.el.nativeElement, 'border-right', brd);
  }

}
