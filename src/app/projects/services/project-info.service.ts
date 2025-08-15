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
          'Vercel',
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
        //web api
        imageSrc: './assets/project-images/WebAPI.png',
        imageAlt: 'Web API',
        projectTitle: 'Web API',
        toolsUsed: [
          'C#',
          'ASP.NET Core',
          'Entity Framework Core',
          'SQL Server',
          'Postman',
          'NSwag',
          'Git',
        ],
        projectDescription: [
          'Developed a Web API using ASP.NET, with 4 controllers and Entity Framework Core for seamless database connectivity',
          'Utilized the NSwag library to view controllers and their actions',
          'Implemented CRUD operations for each controller, ensuring smooth handling of HTTP requests',
        ],
        repoLink: 'https://github.com/NathanBurns3/WebAPI',
      },
      {
        //student scores gui
        imageSrc: './assets/project-images/SS.png',
        imageAlt: 'Student Scores GUI',
        projectTitle: 'Student Scores GUI',
        toolsUsed: ['C#', '.NET Core', 'Entity Framework Core', 'Git'],
        projectDescription: [
          'Developed a .NET Core application that utilizes Entity Framework Core for database connectivity',
          'the application acts as a gradebook with student information, grades, calculated scores, and averages',
          'Users can add, edit, and delete students from the database',
          'Utilized the ICloneable Interface for deep copying of student objects during updates, allowing changes to be saved only when accepted',
          'Built with encapsulated forms for easy navigation between operations',
        ],
        repoLink: 'https://github.com/NathanBurns3/StudentScores-WindowsForm',
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
      {
        //binary search gui
        imageSrc: './assets/project-images/BinarySearch.png',
        imageAlt: 'Binary Search GUI',
        projectTitle: 'Binary Search GUI',
        toolsUsed: ['Java', 'JSwing', 'Git'],
        projectDescription: [
          'Developed a custom binary search algorithm for efficient string searching in an array',
          'Facilitated user input of strings, sorting them in ascending order for improved searchability',
          'When the requested string was absent, provided the position it would occupy for future input data efficiency',
        ],
        repoLink: 'https://github.com/NathanBurns3/Lab-10-Binary-Search',
      },
      {
        //vex turning point
        imageSrc: './assets/project-images/turningPoint.jpg',
        imageAlt: 'Vex Turning Point',
        projectTitle: 'Vex Turning Point',
        toolsUsed: ['RobotC', 'VEX Robotics'],
        projectDescription: [
          'Collaborated with a team to design a robot for a fast-paced point system game',
          'Mapped controller buttons to robot motors and gears',
          'Coded an autonomous program in RobotC to position the robot and navigate various platforms',
        ],
      },
    ];
  }
}
