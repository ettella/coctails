import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: "[appNews]"
})
export class NewsDirective implements OnInit {

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.elementRef.nativeElement.style.backgroundColor = "orange";
  }

}
