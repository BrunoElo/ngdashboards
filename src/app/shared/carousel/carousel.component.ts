import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  animations: [
    trigger('carouselAnimation', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 })),
      ]),
      transition('*=> void', [animate('500ms', style({ opacity: 0 }))]),
    ]),
  ],
})
export class CarouselComponent implements OnInit {
  @Input() slidePhotos;
  currentSlide: number = 0;
  //dotIndex;

  constructor() {}

  ngOnInit(): void {}

  onPreviousClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.slidePhotos.length - 1 : previous;
  }

  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slidePhotos.length ? 0 : next;
  }

  onDotClick(event) {
    this.currentSlide = event.target.dataset.imgindex;
    //this.dotIndex = event.target.dataset.imgindex;
  }
}
