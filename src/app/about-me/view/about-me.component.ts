import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
})
export class AboutMeComponent implements OnInit {
  selectedindex = 1;

  slideShow() {
    console.log('slideshow');
    var i;
    var x = document.getElementsByClassName('mySlides');
    for (i = 0; i < x.length; i++) {
      (x[i] as HTMLElement).style.display = 'none';
    }
    if (this.selectedindex >= x.length) {
      this.selectedindex = 1;
    } else {
      this.selectedindex++;
    }
    (x[this.selectedindex - 1] as HTMLElement).style.display = 'block';
    setTimeout(this.slideShow.bind(this), 2000); // Change image every 2 seconds */
  }

  ngOnInit() {
    this.slideShow();
  }
}
