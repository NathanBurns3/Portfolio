import { Component, AfterViewInit } from '@angular/core';
import { SkillIconService } from '../services/skill-icon.service';
import { ISkillIcon } from '../models/skill-icon';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  providers: [SkillIconService],
})
export class SkillsComponent implements AfterViewInit {
  programmingLanguages: ISkillIcon[] = [];
  frameworks: ISkillIcon[] = [];
  databases: ISkillIcon[] = [];
  operatingSystems: ISkillIcon[] = [];
  softwares: ISkillIcon[] = [];

  constructor(private skillIconService: SkillIconService) {}

  ngOnInit() {
    this.programmingLanguages = this.skillIconService.getProgrammingLanguages();
    this.frameworks = this.skillIconService.getFrameworks();
    this.databases = this.skillIconService.getDatabases();
    this.operatingSystems = this.skillIconService.getOperatingSystems();
    this.softwares = this.skillIconService.getSoftwares();
  }

  ngAfterViewInit() {
    this.setupScrollAnimations();
  }

  private setupScrollAnimations() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.id === 'skills') {
              entry.target.classList.add('section-visible');
            }

            if (entry.target.classList.contains('skill-category')) {
              entry.target.classList.add('animate');
              this.animateSkillIcons(entry.target);
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      observer.observe(skillsSection);
    }

    const skillCategories = document.querySelectorAll('.skill-category');
    skillCategories.forEach((category) => observer.observe(category));
  }

  private animateSkillIcons(category: Element) {
    const skillIcons = category.querySelectorAll('#logo-holder');

    skillIcons.forEach((icon, index) => {
      setTimeout(() => {
        (icon as HTMLElement).classList.add('animate');
      }, index * 100);
    });
  }
}
