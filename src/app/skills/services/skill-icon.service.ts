import { Injectable } from '@angular/core';
import { ISkillIcon } from '../models/skill-icon';

@Injectable({
  providedIn: 'root',
})
export class SkillIconService {
  getProgrammingLanguages(): ISkillIcon[] {
    return [
      {
        imageSrc: './assets/skills-icons/programming-languages/CSharp.png',
        imageAlt: 'C#',
        skillName: 'C#',
      },
      {
        imageSrc: './assets/skills-icons/programming-languages/Python.png',
        imageAlt: 'Python',
        skillName: 'Python',
      },
      {
        imageSrc: './assets/skills-icons/programming-languages/Java.png',
        imageAlt: 'Java',
        skillName: 'Java',
      },
      {
        imageSrc: './assets/skills-icons/programming-languages/C++.png',
        imageAlt: 'C++',
        skillName: 'C++',
      },
      {
        imageSrc: './assets/skills-icons/programming-languages/TS.png',
        imageAlt: 'TypeScript',
        skillName: 'TypeScript',
      },
      {
        imageSrc: './assets/skills-icons/programming-languages/JS.png',
        imageAlt: 'JavaScript',
        skillName: 'JavaScript',
      },
      {
        imageSrc: './assets/skills-icons/programming-languages/Go.png',
        imageAlt: 'Go',
        skillName: 'Go',
      },
      {
        imageSrc: './assets/skills-icons/programming-languages/HTML.png',
        imageAlt: 'HTML',
        skillName: 'HTML',
      },
      {
        imageSrc: './assets/skills-icons/programming-languages/CSS.png',
        imageAlt: 'CSS',
        skillName: 'CSS',
      },
      {
        imageSrc: './assets/skills-icons/programming-languages/SQL.png',
        imageAlt: 'SQL',
        skillName: 'SQL',
      },
    ];
  }

  getFrameworks(): ISkillIcon[] {
    return [
      {
        imageSrc: './assets/skills-icons/frameworks/Angular.png',
        imageAlt: 'Angular',
        skillName: 'Angular',
      },
      {
        imageSrc: './assets/skills-icons/frameworks/React.png',
        imageAlt: 'React',
        skillName: 'React',
      },
      {
        imageSrc: './assets/skills-icons/frameworks/NextJS.png',
        imageAlt: 'Next.js',
        skillName: 'Next.js',
      },
      {
        imageSrc: './assets/skills-icons/frameworks/ExpressJS.png',
        imageAlt: 'Express.js',
        skillName: 'Express.js',
      },
      {
        imageSrc: './assets/skills-icons/frameworks/FastAPI.png',
        imageAlt: 'FastAPI',
        skillName: 'FastAPI',
      },
      {
        imageSrc: './assets/skills-icons/frameworks/Net.png',
        imageAlt: '.NET Core',
        skillName: '.NET Core',
      },
      {
        imageSrc: './assets/skills-icons/frameworks/ASPNet.png',
        imageAlt: 'ASP.NET Core',
        skillName: 'ASP.NET Core',
      },
      {
        imageSrc: './assets/skills-icons/frameworks/RxJS.png',
        imageAlt: 'RxJS',
        skillName: 'RxJS',
      },
      {
        imageSrc: './assets/skills-icons/frameworks/Bootstrap.png',
        imageAlt: 'Bootstrap',
        skillName: 'Bootstrap',
      },
      {
        imageSrc: './assets/skills-icons/frameworks/Tailwind.png',
        imageAlt: 'Tailwind CSS',
        skillName: 'Tailwind CSS',
      },
      {
        imageSrc: './assets/skills-icons/frameworks/Entity.png',
        imageAlt: 'Entity',
        skillName: 'Entity',
      },
      {
        imageSrc: './assets/skills-icons/frameworks/Jest.png',
        imageAlt: 'Jest',
        skillName: 'Jest',
      },
      {
        imageSrc: './assets/skills-icons/frameworks/JUnit.png',
        imageAlt: 'JUnit',
        skillName: 'JUnit',
      },
    ];
  }

  getDatabases(): ISkillIcon[] {
    return [
      {
        imageSrc: './assets/skills-icons/databases/MongoDB.png',
        imageAlt: 'MongoDB',
        skillName: 'MongoDB',
      },
      {
        imageSrc: './assets/skills-icons/databases/PostgreSQL.png',
        imageAlt: 'PostgreSQL',
        skillName: 'Postgre SQL',
      },
      {
        imageSrc: './assets/skills-icons/databases/MySQL.png',
        imageAlt: 'MySQL',
        skillName: 'MySQL',
      },
      {
        imageSrc: './assets/skills-icons/databases/SQLite.png',
        imageAlt: 'SQLite',
        skillName: 'SQLite',
      },
      {
        imageSrc: './assets/skills-icons/databases/Supabase.png',
        imageAlt: 'Supabase',
        skillName: 'Supabase',
      },
      {
        imageSrc: './assets/skills-icons/databases/SSMS.png',
        imageAlt: 'SSMS',
        skillName: 'SSMS',
      },
      {
        imageSrc: './assets/skills-icons/databases/Azure.png',
        imageAlt: 'Azure Data Studio',
        skillName: 'Azure Data Studio',
      },
      {
        imageSrc: './assets/skills-icons/databases/Heidi.png',
        imageAlt: 'HeidiSQL',
        skillName: 'HeidiSQL',
      },
      {
        imageSrc: './assets/skills-icons/databases/LINQ.png',
        imageAlt: 'LINQ',
        skillName: 'LINQ',
      },
    ];
  }

  getOperatingSystems(): ISkillIcon[] {
    return [
      {
        imageSrc: './assets/skills-icons/operating-systems/macOS.png',
        imageAlt: 'macOS',
        skillName: 'macOS',
      },
      {
        imageSrc: './assets/skills-icons/operating-systems/Windows.png',
        imageAlt: 'Windows',
        skillName: 'Windows',
      },
      {
        imageSrc: './assets/skills-icons/operating-systems/Linux.png',
        imageAlt: 'Linux',
        skillName: 'Linux',
      },
    ];
  }

  getSoftwares(): ISkillIcon[] {
    return [
      {
        imageSrc: './assets/skills-icons/software/Git.png',
        imageAlt: 'Git',
        skillName: 'Git',
      },
      {
        imageSrc: './assets/skills-icons/software/Docker.png',
        imageAlt: 'Docker',
        skillName: 'Docker',
      },
      {
        imageSrc: './assets/skills-icons/software/NGINX.png',
        imageAlt: 'NGINX',
        skillName: 'NGINX',
      },
      {
        imageSrc: './assets/skills-icons/software/EC2.png',
        imageAlt: 'AWS EC2',
        skillName: 'AWS EC2',
      },
      {
        imageSrc: './assets/skills-icons/software/Vercel.png',
        imageAlt: 'Vercel',
        skillName: 'Vercel',
      },
      {
        imageSrc: './assets/skills-icons/software/Postman.png',
        imageAlt: 'Postman',
        skillName: 'Postman',
      },
      {
        imageSrc: './assets/skills-icons/software/Jupyter.png',
        imageAlt: 'Jupyter',
        skillName: 'Jupyter',
      },
      {
        imageSrc: './assets/skills-icons/software/Jira.png',
        imageAlt: 'Jira',
        skillName: 'Jira',
      },
      {
        imageSrc: './assets/skills-icons/software/ado.jpeg',
        imageAlt: 'Azure DevOps',
        skillName: 'Azure DevOps',
      },
      {
        imageSrc: './assets/skills-icons/software/Perforce.png',
        imageAlt: 'Perforce',
        skillName: 'Perforce',
      },
    ];
  }
}
