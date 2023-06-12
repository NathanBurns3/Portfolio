import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HomeComponent } from './home/views/home.component';
import { AboutMeComponent } from './about-me/views/about-me.component';
import { ProjectsComponent } from './projects/views/projects.component';
import { SkillsComponent } from './skills/views/skills.component';

@NgModule({
  declarations: [
    HomeComponent,
    AboutMeComponent,
    ProjectsComponent,
    SkillsComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [
    HomeComponent,
    AboutMeComponent,
    ProjectsComponent,
    SkillsComponent,
  ],
})
export class PortfolioModule {}
