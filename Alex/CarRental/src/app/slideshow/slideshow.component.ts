import { Component, OnInit, } from '@angular/core';


@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {
  slides: any[] = new Array(3).fill({id: -1, src: '', title: '', subtitle: ''});

  constructor() {}

  ngOnInit(): void {
    this.slides[0] = {
      src: './assets/images/alpha.jpg',
    };
    this.slides[1] = {
      src: './assets/images/mercedes.jpg',
    }
    this.slides[2] = {
      src: './assets/images/lambo.jpg',
    }
  }

  onItemChange($event: any): void {
    console.log('Carousel onItemChange', $event);
  }
}