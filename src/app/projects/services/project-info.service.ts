import { Injectable } from '@angular/core';
import { IProjectInfo } from '../models/project-info';

@Injectable({
  providedIn: 'root',
})
export class ProjectInfoService {
  getProjectInfo(): IProjectInfo[] {
    return [
      {
        //away game
        imageSrc: './assets/project-images/AwayGame.png',
        imageAlt: 'Away Game project preview',
        projectTitle: 'Away Game',
        toolsUsed: [
          'Angular',
          'TypeScript',
          'Tailwind CSS',
          'FastAPI',
          'PostgreSQL',
          'Docker',
          'Azure Functions',
          'Clerk',
          'GitHub Actions',
        ],
        projectDescription: [
          'Built a full-stack web app for traveling sports fans to discover nearby games, safety alerts, fan meetups, and social features.',
          'Won Best Overall Project and Best in Category at the university Senior Expo against 65+ teams.',
          'Architected a scalable backend with FastAPI, async SQLAlchemy, Alembic migrations, and PostgreSQL deployed through Azure Functions and nightly scheduled triggers.',
          'Implemented Clerk authentication, a Leaflet mini-map centered on the user, real-time chat, friend and DM features, and visibility-aware polling for notifications.',
          'Containerized services with Docker and automated deployment with GitHub Actions CI/CD.',
        ],
      },
      {
        //activity tracker
        imageSrc: './assets/project-images/ActivityTracker.png',
        imageAlt: 'CLI and web productivity tracker preview',
        projectTitle: 'CLI & Web Productivity Tracker',
        toolsUsed: [
          'Go',
          'PostgreSQL',
          'AppleScript',
          'Chrome Extension (JS)',
          'React',
          'Next.js',
          'Docker',
        ],
        projectDescription: [
          'Built a macOS activity tracking system with a Go-based CLI and Chrome extension to capture application and web usage.',
          'Persisted logs in PostgreSQL through a background macOS launchd daemon.',
          'Visualized usage data through a Cobra CLI with asciigraph terminal charts and a React/Next.js dashboard with Recharts.',
          'Containerized the workflow with Docker to keep the CLI, extension, and dashboard environment consistent.',
        ],
      },
      {
        //fitness tracker
        imageSrc: './assets/project-images/ActiveLifeTracker.png',
        imageAlt: 'ActiveLife Tracker',
        projectTitle: 'ActiveLife Tracker',
        toolsUsed: [
          'Angular',
          'Express.js',
          'MongoDB',
          'AWS EC2',
          'NGINX',
          'JWTs',
          'bcrypt',
          'RxJS',
          'Tailwind CSS',
          'Postman',
          'Jest',
        ],
        projectDescription: [
          'Built a full-stack fitness tracking app using the MEAN stack, deployed via Vercel (frontend) and AWS EC2 (backend) with NGINX reverse proxy, Certbot SSL, and pm2 for uptime',
          'Developed secure authentication with JWTs, bcrypt, email verification, tokenized password resets via BREVO, and Google reCAPTCHA for abuse prevention.',
          'Implemented frontend caching and algorithms to generate personalized macro plans from user profile data',
          'Created interactive charts with Chart.js and Tailwind CSS, integrating the FDA FoodData Central API for real-time nutrition data',
          'Applied rate limiting, used RxJS for reactive state management, and tested with Postman and Jest using in-memory MongoDB',
        ],
        repoLink: 'https://github.com/NathanBurns3/Fitness-Tracker',
        liveLink: 'https://www.activelifetracker.com/login',
      },
      {
        //crypto tracker
        imageSrc: './assets/project-images/CryptoTracker.png',
        imageAlt: 'Crypto Tracker Mobile App',
        projectTitle: 'Crypto Tracker Mobile App',
        toolsUsed: [
          'Xamarin.Forms',
          'C#',
          'XAML',
          'Ethercan API',
          'SQLite',
          'Git',
        ],
        projectDescription: [
          'Developed a coin tracking app using Xamarin.Forms (C# backend, XAML frontend) for cross-platform use, integrating Etherscan APIs for real-time crypto data',
          'Enabled dynamic UI customization, allowing users to personalize themes and font sizes',
          'Used SQLite for efficient data storage and retrieval, supporting asynchronous operations',
        ],
        repoLink: 'https://github.com/NathanBurns3/Cryptocurrency-Tracker',
      },
      {
        //sports text
        imageSrc: './assets/project-images/sportsText.png',
        imageAlt: 'Sports Text Script',
        projectTitle: 'Sports Text Script',
        toolsUsed: ['Python', 'ESPN API', 'Twilio API', 'CronTab', 'Git'],
        projectDescription: [
          'Developed a Python script to interact with the ESPN API for retrieving daily sports information',
          'Integrated the Twilio API to send automated text messages containing sports updates',
          'Configured a Raspberry Pi as a dedicated server to host the script',
          'Utilized crontab scheduling to ensure the script runs daily for delivering timely updates',
        ],
        repoLink: 'https://github.com/NathanBurns3/Sports-Text',
      },
      {
        //endless runner
        imageSrc: './assets/project-images/ERG.png',
        imageAlt: 'Endless Runner',
        projectTitle: 'Endless Runner Game',
        toolsUsed: [
          'Phaser',
          'Geolocation API',
          'OpenWeather API',
          'Postman',
          'Javascript',
          'HTML',
          'CSS',
          'Git',
        ],
        projectDescription: [
          'Created a 2D game using JavaScript and the Phaser framework',
          "Incorporated Geolocation and Weather APIs to fetch real-time data and dynamically modify the game's appearance",
        ],
        repoLink: 'https://github.com/NathanBurns3/Endless-Runner-Game',
        liveLink: 'https://nathanburns3.github.io/Endless-Runner-Game/',
      },
    ];
  }
}
