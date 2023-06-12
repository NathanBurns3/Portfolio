import { Injectable } from '@angular/core';
import { ISkillIcon } from '../models/skill-icon';

@Injectable({
  providedIn: 'root',
})
export class SkillIconService {
  getProgrammingLanguages(): ISkillIcon[] {
    return [
      {
        imageSrc:
          '../../../assets/skills-icons/programming-languages/CSharp.png',
        imageAlt: 'C#',
        skillName: 'C#',
      },
      {
        imageSrc: '../../../assets/skills-icons/programming-languages/C++.png',
        imageAlt: 'C++',
        skillName: 'C++',
      },
      {
        imageSrc: '../../../assets/skills-icons/programming-languages/Java.png',
        imageAlt: 'Java',
        skillName: 'Java',
      },
      {
        imageSrc:
          '../../../assets/skills-icons/programming-languages/Python.png',
        imageAlt: 'Python',
        skillName: 'Python',
      },
      {
        imageSrc: '../../../assets/skills-icons/programming-languages/JS.png',
        imageAlt: 'JavaScript',
        skillName: 'JavaScript',
      },
      {
        imageSrc: '../../../assets/skills-icons/programming-languages/TS.png',
        imageAlt: 'TypeScript',
        skillName: 'TypeScript',
      },
      {
        imageSrc: '../../../assets/skills-icons/programming-languages/HTML.png',
        imageAlt: 'HTML',
        skillName: 'HTML',
      },
      {
        imageSrc: '../../../assets/skills-icons/programming-languages/CSS.png',
        imageAlt: 'CSS',
        skillName: 'CSS',
      },
    ];
  }

  getFrameworks(): ISkillIcon[] {
    return [
      {
        imageSrc: '../../../assets/skills-icons/frameworks/Net.png',
        imageAlt: '.NET Core',
        skillName: '.NET Core',
      },
      {
        imageSrc: '../../../assets/skills-icons/frameworks/ASPNet.png',
        imageAlt: 'ASP.NET Core',
        skillName: 'ASP.NET Core',
      },
      {
        imageSrc: '../../../assets/skills-icons/frameworks/Entity.png',
        imageAlt: 'Entity',
        skillName: 'Entity',
      },
      {
        imageSrc: '../../../assets/skills-icons/frameworks/Angular.png',
        imageAlt: 'Angular',
        skillName: 'Angular',
      },
      {
        imageSrc: '../../../assets/skills-icons/frameworks/Phaser.png',
        imageAlt: 'Phaser',
        skillName: 'Phaser',
      },
      {
        imageSrc: '../../../assets/skills-icons/frameworks/JSwing.png',
        imageAlt: 'JSwing',
        skillName: 'JSwing',
      },
      {
        imageSrc: '../../../assets/skills-icons/frameworks/JUnit.png',
        imageAlt: 'JUnit',
        skillName: 'JUnit',
      },
      {
        imageSrc: '../../../assets/skills-icons/frameworks/JavaFx.png',
        imageAlt: 'JavaFX',
        skillName: 'JavaFX',
      },
    ];
  }

  getDatabases(): ISkillIcon[] {
    return [
      {
        imageSrc: '../../../assets/skills-icons/databases/SQL.png',
        imageAlt: 'SQL',
        skillName: 'SQL',
      },
      {
        imageSrc: '../../../assets/skills-icons/databases/LINQ.png',
        imageAlt: 'LINQ',
        skillName: 'LINQ',
      },
      {
        imageSrc: '../../../assets/skills-icons/databases/SSMS.png',
        imageAlt: 'SSMS',
        skillName: 'SSMS',
      },
      {
        imageSrc: '../../../assets/skills-icons/databases/Azure.png',
        imageAlt: 'Azure Data Studio',
        skillName: 'Azure Data Studio',
      },
      {
        imageSrc: '../../../assets/skills-icons/databases/Heidi.png',
        imageAlt: 'HeidiSQL',
        skillName: 'HeidiSQL',
      },
    ];
  }

  getOperatingSystems(): ISkillIcon[] {
    return [
      {
        imageSrc: '../../../assets/skills-icons/operating-systems/macOS.png',
        imageAlt: 'macOS',
        skillName: 'macOS',
      },
      {
        imageSrc: '../../../assets/skills-icons/operating-systems/Windows.png',
        imageAlt: 'Windows',
        skillName: 'Windows',
      },
      {
        imageSrc: '../../../assets/skills-icons/operating-systems/Linux.png',
        imageAlt: 'Linux',
        skillName: 'Linux',
      },
    ];
  }

  getSofwares(): ISkillIcon[] {
    return [
      {
        imageSrc: '../../../assets/skills-icons/software/Git.png',
        imageAlt: 'Git',
        skillName: 'Git',
      },
      {
        imageSrc: '../../../assets/skills-icons/software/Perforce.png',
        imageAlt: 'Perforce',
        skillName: 'Perforce',
      },
      {
        imageSrc: '../../../assets/skills-icons/software/Postman.png',
        imageAlt: 'Postman',
        skillName: 'Postman',
      },
      {
        imageSrc: '../../../assets/skills-icons/software/Docker.png',
        imageAlt: 'Docker',
        skillName: 'Docker',
      },
      {
        imageSrc: '../../../assets/skills-icons/software/Jira.png',
        imageAlt: 'Jira',
        skillName: 'Jira',
      },
      {
        imageSrc: '../../../assets/skills-icons/software/VisualStudio.png',
        imageAlt: 'Visual Studio',
        skillName: 'Visual Studio',
      },
      {
        imageSrc: '../../../assets/skills-icons/software/VSCode.png',
        imageAlt: 'VS Code',
        skillName: 'VS Code',
      },
      {
        imageSrc: '../../../assets/skills-icons/software/IntelliJ.png',
        imageAlt: 'IntelliJ',
        skillName: 'IntelliJ',
      },
    ];
  }
}
