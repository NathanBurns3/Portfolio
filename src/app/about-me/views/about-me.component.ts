import { Component, OnInit, AfterViewInit } from '@angular/core';
import { PortraitPhotoService } from '../services/portrait-photos.service';
import { IPortraitPhoto } from '../models/portrait-photos';

@Component({
  selector: 'about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
})
export class AboutMeComponent implements OnInit, AfterViewInit {
  selectedindex = 1;
  private observer?: IntersectionObserver;

  slideShow() {
    const x = document.getElementsByClassName('mySlides');
    for (let i = 0; i < x.length; i++) {
      (x[i] as HTMLElement).classList.remove('image-active');
    }
    if (this.selectedindex >= x.length) {
      this.selectedindex = 1;
    } else {
      this.selectedindex++;
    }
    (x[this.selectedindex - 1] as HTMLElement).classList.add('image-active');
    setTimeout(this.slideShow.bind(this), 2000);
  }

  ngOnInit(): void {
    this.slideShow();
  }

  ngAfterViewInit(): void {
    // Animate About section and text on scroll
    const aboutSection = document.getElementById('about');
    const textContent = document.querySelector('.text-content');
    const slideshow = document.querySelector('.slideshow-container');
    if (aboutSection && textContent && slideshow) {
      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              aboutSection.classList.add('about-animate');
              textContent.classList.add('text-animate');
              slideshow.classList.add('slideshow-animate');
            }
          });
        },
        { threshold: 0.3 }
      );
      this.observer.observe(aboutSection);
    }
  }
}
