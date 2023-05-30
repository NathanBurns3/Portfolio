import { Injectable } from '@angular/core';
import { IPortraitPhoto } from '../model/portrait-photos';

@Injectable({
  providedIn: 'root',
})
export class PortraitPhotoService {
  getPortraitPhotos(): IPortraitPhoto[] {
    return [
      {
        imageSrc: '../../../assets/profile-pictures/IMG1.JPG',
        imageAlt: 'Prom',
      },
      {
        imageSrc: '../../../assets/profile-pictures/IMG2.JPG',
        imageAlt: 'Snowboarding',
      },
      {
        imageSrc: '../../../assets/profile-pictures/IMG3.JPG',
        imageAlt: 'Close up',
      },
      {
        imageSrc: '../../../assets/profile-pictures/IMG4.JPG',
        imageAlt: 'Close up',
      },
      {
        imageSrc: '../../../assets/profile-pictures/IMG5.JPG',
        imageAlt: 'Cross Country Districts',
      },
      {
        imageSrc: '../../../assets/profile-pictures/IMG6.JPG',
        imageAlt: 'Close up',
      },
      {
        imageSrc: '../../../assets/profile-pictures/IMG7.JPG',
        imageAlt: 'Close up',
      },
      {
        imageSrc: '../../../assets/profile-pictures/IMG8.JPG',
        imageAlt: 'Cross Country State Championship',
      },
    ];
  }
}
