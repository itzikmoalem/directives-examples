import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHideAfter]'
})
export class HideAfterDirective implements OnInit {
  @Input() appHideAfter = 3000000;
  constructor(private e:ElementRef) {  }

  ngOnInit() {
    
    setTimeout(() => {
      this.e.nativeElement.style.visibility="hidden";
    }, this.appHideAfter);

  }
}
