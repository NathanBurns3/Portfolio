import { Component } from '@angular/core';
import { SkillIconService } from '../services/skill-icon.service';
import { ISkillIcon } from '../models/skill-icon';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  providers: [SkillIconService],
})
export class SkillsComponent {
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
    this.softwares = this.skillIconService.getSofwares();
  }
}
