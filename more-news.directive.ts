import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMoreNews]'
})
export class MoreNewsDirective implements OnInit{
  @Input('appMoreNews') defaultColor: string = "white";
  @Input() kiemeltColor: string = "red";



  @HostBinding('style.color') backColor: string;

  constructor(private elementRef: ElementRef , private render: Renderer2)
  {
    this.backColor = this.defaultColor;
  }
  

  ngOnInit(): void {
    this.backColor = this.defaultColor;
  }
  
  @HostListener('mouseenter') mouseover(event: Event){
    this.backColor = this.kiemeltColor;
  }

  @HostListener('mouseleave') mouseexit(event: Event){
    this.backColor = this.defaultColor;
  }

}

 