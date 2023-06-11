import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HomeComponent } from './home/views/home.component';
import { AboutMeComponent } from './about-me/views/about-me.component';
import { ProjectsComponent } from './projects/views/projects.component';

@NgModule({
  declarations: [HomeComponent, AboutMeComponent, ProjectsComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [HomeComponent, AboutMeComponent, ProjectsComponent],
})
export class PortfolioModule {}
