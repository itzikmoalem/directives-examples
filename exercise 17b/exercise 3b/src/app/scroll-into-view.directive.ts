import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appScrollIntoView]'
})
export class ScrollIntoViewDirective implements OnInit {

  constructor(private e: ElementRef) { }
  ngOnInit() {
    let h: HTMLElement = this.e.nativeElement;
    h.scrollIntoView();

  }

}
