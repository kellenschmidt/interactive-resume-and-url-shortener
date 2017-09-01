import { Component, OnInit, HostListener, Inject, ViewChild, ElementRef } from '@angular/core';
import { DOCUMENT } from "@angular/platform-browser";

@Component({
  selector: 'ks-title-page',
  templateUrl: './title-page.component.html',
  styleUrls: ['./title-page.component.scss']
})
export class TitlePageComponent implements OnInit {

  @ViewChild('nameAndDescription') nameDescriptionElement: ElementRef;
  titleHeightFromTop = 0;
  mainHeightFromTop = 0;
  titleHeightFromTopStart = 0;
  boundingClientRect;

  myNewOpacity = 1;
  myNewPaddingTop = 0;
  // Fade out animation for title content when scrolling down
  @HostListener('window:scroll', ['$event']) 
  doSomething(event) {
    alert("Scrolled");
    console.log("top: " + this.boundingClientRect.top + " bottom: " + this.boundingClientRect.bottom);
    // Number of pixels between top of elements and top of viewport
    this.titleHeightFromTop = this.nameDescriptionElement.nativeElement.getBoundingClientRect().top;
    this.mainHeightFromTop = this.nameDescriptionElement.nativeElement.getBoundingClientRect().bottom;
    // Opacity determined by fraction of title page still showing on viewport multiplied by constant
    let newOpacity = this.mainHeightFromTop / window.screen.height;
    // Set opacity of title content
    this.myNewOpacity = newOpacity*newOpacity;
    // Add padding-top to title content so it scroll up more slowly
    this.myNewPaddingTop = (this.titleHeightFromTopStart-this.titleHeightFromTop)/1.45;
  }

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
    this.boundingClientRect = this.nameDescriptionElement.nativeElement.getBoundingClientRect();
    this.titleHeightFromTopStart = this.nameDescriptionElement.nativeElement.getBoundingClientRect().top;
    console.log("Title height from start: " + this.nameDescriptionElement.nativeElement.getBoundingClientRect().top);

  }

}
