import { Injectable } from '@angular/core';
import { ILink } from '../model/links';

@Injectable({
  providedIn: 'root',
})
export class LinkService {
  getSocialMediaLinks(): ILink[] {
    return [
      {
        url: 'https://www.linkedin.com/in/nathan-burns-717802170/',
        iconSrc: '../assets/icons/linkedin-white.png',
        iconSrcHover: '../assets/icons/linkedin-green.png',
        iconSrcDefault: '../assets/icons/linkedin-white.png',
        altText: 'LinkedIn',
      },
      {
        url: 'https://www.github.com/NathanBurns3',
        iconSrc: '../assets/icons/github-white.png',
        iconSrcHover: '../assets/icons/github-green.png',
        iconSrcDefault: '../assets/icons/github-white.png',
        altText: 'GitHub',
      },
      {
        url: 'https://www.instagram.com/nathan.burnss/',
        iconSrc: '../assets/icons/instagram-white.png',
        iconSrcHover: '../assets/icons/instagram-green.png',
        iconSrcDefault: '../assets/icons/instagram-white.png',
        altText: 'Instagram',
      },
    ];
  }
}
