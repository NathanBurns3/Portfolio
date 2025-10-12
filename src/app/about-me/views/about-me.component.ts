import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { PortraitPhotoService } from '../services/portrait-photos.service';
import { IPortraitPhoto } from '../models/portrait-photos';

@Component({
  selector: 'about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
})
export class AboutMeComponent implements OnInit, AfterViewInit, OnDestroy {
  selectedindex = 1;
  private observer?: IntersectionObserver;
  isVisible = false;

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
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              this.isVisible = true;
              aboutSection.classList.add('section-visible');
            }
          });
        },
        { threshold: 0.2 }
      );
      this.observer.observe(aboutSection);
    }
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
