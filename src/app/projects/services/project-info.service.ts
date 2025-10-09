import { Injectable } from '@angular/core';
import { IProjectInfo } from '../models/project-info';

@Injectable({
  providedIn: 'root',
})
export class ProjectInfoService {
  getProjectInfo(): IProjectInfo[] {
    return [
      {
        // fitness tracker
        imageSrc: './assets/project-images/ActiveLifeTracker.png',
        imageAlt: 'ActiveLife Tracker',
        projectTitle: 'ActiveLife Tracker',
        toolsUsed: [
          'Angular',
          'Node.js',
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
      },
      {
        //database design
        imageSrc: './assets/project-images/databaseDesign.png',
        imageAlt: 'Database Design',
        projectTitle: 'Database Design',
        toolsUsed: ['SQL', 'SQL Server Management Studio', 'LucidChart'],
        projectDescription: [
          'Designed and developed a normalized database for a mock Professional Service Consulting company to track their work for various clients',
          'Implemented a schema design adhering to 3rd Normal Form principles, establishing primary and foreign key relationships between tables',
          'Utilized SSMS and SQL to create and manage the database, ensuring efficient data organization and retrieval',
          'Developed custom queries to extract specific data based on client requirements and time periods, providing valuable insights for analysis and reporting',
          'Contributed to improving data management and decision-making processes for the consulting company',
        ],
      },
      {
        //recurisve file lister
        imageSrc: './assets/project-images/RFL.png',
        imageAlt: 'Recursive File Lister',
        projectTitle: 'Recursive File Lister',
        toolsUsed: ['Java', 'JSwing', 'Git'],
        projectDescription: [
          'Created a JSwing application that uses JFileChooser to allow users to select a directory in the system',
          'Uses a recursive approach to list all the files within the chosen directory and any of its sub-directories',
        ],
        repoLink: 'https://github.com/NathanBurns3/Lab-11-Recursive-Filelister',
      },
    ];
  }
}
