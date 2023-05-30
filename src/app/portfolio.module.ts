import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HomeComponent } from './home/view/home.component';
import { AboutMeComponent } from './about-me/view/about-me.component';

@NgModule({
  declarations: [HomeComponent, AboutMeComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [HomeComponent, AboutMeComponent],
})
export class PortfolioModule {}
