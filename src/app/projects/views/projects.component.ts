import { Component, OnInit } from '@angular/core';
import { ProjectInfoService } from '../services/project-info.service';
import { IProjectInfo } from '../models/project-info';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers: [ProjectInfoService],
})
export class ProjectsComponent implements OnInit {
  projectInfo: IProjectInfo[] = [];

  constructor(private projectInfoService: ProjectInfoService) {}

  ngOnInit() {
    this.projectInfo = this.projectInfoService.getProjectInfo();
  }
}
