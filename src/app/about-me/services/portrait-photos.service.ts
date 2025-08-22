import { Injectable } from '@angular/core';
import { IPortraitPhoto } from '../models/portrait-photos';

@Injectable({
  providedIn: 'root',
})
export class PortraitPhotoService {
  getPortraitPhotos(): IPortraitPhoto[] {
    return [
      {
        imageSrc: './assets/profile-pictures/IMG1.jpg',
        imageAlt: 'Prom',
      },
      {
        imageSrc: './assets/profile-pictures/IMG2.jpg',
        imageAlt: 'Snowboarding',
      },
      {
        imageSrc: './assets/profile-pictures/IMG3.jpg',
        imageAlt: 'Close up',
      },
      {
        imageSrc: './assets/profile-pictures/IMG4.jpg',
        imageAlt: 'Close up',
      },
      {
        imageSrc: './assets/profile-pictures/IMG5.jpg',
        imageAlt: 'Cross Country Districts',
      },
      {
        imageSrc: './assets/profile-pictures/IMG6.jpg',
        imageAlt: 'Close up',
      },
      {
        imageSrc: './assets/profile-pictures/IMG7.jpg',
        imageAlt: 'Close up',
      },
      {
        imageSrc: './assets/profile-pictures/IMG8.jpg',
        imageAlt: 'Cross Country State Championship',
      },
    ];
  }
}
