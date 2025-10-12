import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { ProjectInfoService } from '../services/project-info.service';
import { IProjectInfo } from '../models/project-info';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers: [ProjectInfoService],
})
export class ProjectsComponent implements OnInit, AfterViewInit, OnDestroy {
  projectInfo: IProjectInfo[] = [];
  private observer?: IntersectionObserver;

  constructor(private projectInfoService: ProjectInfoService) {}

  ngOnInit() {
    this.projectInfo = this.projectInfoService.getProjectInfo();
  }

  ngAfterViewInit(): void {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              projectsSection.classList.add('section-visible');
              this.animateProjectCards();
            }
          });
        },
        { threshold: 0.1 }
      );
      this.observer.observe(projectsSection);
    }
  }

  animateProjectCards() {
    const timelineItems = document.querySelectorAll('.timeline-item');

    timelineItems.forEach((item, index) => {
      setTimeout(() => {
        (item as HTMLElement).classList.add('animate');
      }, index * 300);
    });
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
