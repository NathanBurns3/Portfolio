import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HomeComponent } from './home/views/home.component';
import { AboutMeComponent } from './about-me/views/about-me.component';
import { ProjectsComponent } from './projects/views/projects.component';
import { SkillsComponent } from './skills/views/skills.component';
import { ContactMeComponent } from './contact-me/views/contact-me.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    AboutMeComponent,
    ProjectsComponent,
    SkillsComponent,
    ContactMeComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [
    HomeComponent,
    AboutMeComponent,
    ProjectsComponent,
    SkillsComponent,
    ContactMeComponent,
  ],
})
export class PortfolioModule {}
