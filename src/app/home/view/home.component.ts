import { Component, OnInit } from '@angular/core';
import { ILink } from '../model/links';
import { LinkService } from '../service/link.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [LinkService],
})
export class HomeComponent implements OnInit {
  socialMediaLinks: ILink[] = [];

  constructor(private linkService: LinkService) {}

  ngOnInit() {
    this.socialMediaLinks = this.linkService.getSocialMediaLinks();
  }
}
