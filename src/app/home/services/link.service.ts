import { Injectable } from '@angular/core';
import { ILink } from '../models/links';

@Injectable({
  providedIn: 'root',
})
export class LinkService {
  getSocialMediaLinks(): ILink[] {
    return [
      {
        url: 'https://www.linkedin.com/in/nathan-burns-717802170/',
        iconSrc: '../assets/social-media-icons/linkedin-white.png',
        iconSrcHover: '../assets/social-media-icons/linkedin-green.png',
        iconSrcDefault: '../assets/social-media-icons/linkedin-white.png',
        altText: 'LinkedIn',
      },
      {
        url: 'https://www.github.com/NathanBurns3',
        iconSrc: '../assets/social-media-icons/github-white.png',
        iconSrcHover: '../assets/social-media-icons/github-green.png',
        iconSrcDefault: '../assets/social-media-icons/github-white.png',
        altText: 'GitHub',
      },
      {
        url: 'https://www.instagram.com/nathan.burnss/',
        iconSrc: '../assets/social-media-icons/instagram-white.png',
        iconSrcHover: '../assets/social-media-icons/instagram-green.png',
        iconSrcDefault: '../assets/social-media-icons/instagram-white.png',
        altText: 'Instagram',
      },
    ];
  }
}
