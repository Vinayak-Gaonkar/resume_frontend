
import {
  ElementRef, Output, Directive, AfterViewInit, OnDestroy, EventEmitter
} from '@angular/core';
import {Observable,Subscription, fromEvent} from 'rxjs';




@Directive({
  selector: '[appFade]'
})
export class FadeDirective implements AfterViewInit, OnDestroy {


  @Output()
  appear: EventEmitter<void>;

  elementPos= 0;
  elementHeight: number;

  scrollPos: number;
  windowHeight: number;

  subscriptionScroll: Subscription;
  subscriptionResize: Subscription;

  constructor(private element: ElementRef) {
    this.appear = new EventEmitter<void>();
   }


  saveScrollPos() {
    this.scrollPos = window.scrollY;
  }
  getOffsetTop(element: any){
    let offsetTop = element.offsetTop || 0;
    if(element.offsetParent){
      offsetTop += this.getOffsetTop(element.offsetParent);
    }
    return offsetTop;
  }
  checkVisibility(){
    if(this.isVisible()){
      // double check dimensions (due to async loaded contents, e.g. images)
      this.saveDimensions();
      if(this.isVisible()){
        this.unsubscribe();
        this.appear.emit();
        console.log("emited");
      }
    }
  }
  isVisible(){
    console.log(this.scrollPos,">",this.elementPos,(this.scrollPos + this.windowHeight)+">"+(this.elementPos + this.elementHeight));
    
    return this.scrollPos >= this.elementPos || (this.scrollPos + this.windowHeight) >= (this.elementPos + this.elementHeight);
  }

  saveDimensions() {
    this.elementPos = this.getOffsetTop(this.element.nativeElement);
    this.elementHeight = this.element.nativeElement.offsetHeight;
    this.windowHeight = window.innerHeight;
  }
  unsubscribe(){
    if(this.subscriptionScroll){
      this.subscriptionScroll.unsubscribe();
    }
    if(this.subscriptionResize){
      this.subscriptionResize.unsubscribe();
    }
  }

  subscribe(){
    this.subscriptionScroll = fromEvent(window, 'scroll')
      .subscribe(() => {
        console.log("hi");
        
        this.saveScrollPos();
        this.checkVisibility();
      });
    this.subscriptionResize = fromEvent(window, 'resize')
      .subscribe(() => {
        this.saveDimensions();
        this.checkVisibility();
      });
  }
  ngAfterViewInit(){
    this.subscribe()
  }
  ngOnDestroy(){}
}
