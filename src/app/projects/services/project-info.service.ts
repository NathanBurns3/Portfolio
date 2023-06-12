import { Injectable } from '@angular/core';
import { IProjectInfo } from '../models/project-info';

@Injectable({
  providedIn: 'root',
})
export class ProjectInfoService {
  getProjectInfo(): IProjectInfo[] {
    return [
      {
        //web api
        imageSrc: '../../../assets/project-images/WebAPI.png',
        imageAlt: 'Web API',
        projectTitle: 'Web API',
        toolsUsed:
          'C# | ASP.NET Core | Entity Framework Core | SQL Server | Postman | NSwag | Git',
        projectDescription: [
          'Developed a Web API using ASP.NET, with 4 controllers and Entity Framework Core for seamless database connectivity',
          'Utilized the NSwag library to view controllers and their actions',
          'Implemented CRUD operations for each controller, ensuring smooth handling of HTTP requests',
        ],
        repoLink: 'https://github.com/NathanBurns3/WebAPI',
      },
      {
        //endless runner
        imageSrc: '../../../assets/project-images/ERG.png',
        imageAlt: 'Endless Runner',
        projectTitle: 'Endless Runner Game',
        toolsUsed:
          'JavaScript | Geolocation API | OpenWeather API | Phaser | HTML | CSS | Git',
        projectDescription: [
          'Created a 2D game using JavaScript and the Phaser framework',
          "Incorporated Geolocation and Weather APIs to fetch real-time data and dynamically modify the game's appearance",
        ],
        repoLink: 'https://github.com/NathanBurns3/Endless-Runner-Game',
      },
      {
        //student scores gui
        imageSrc: '../../../assets/project-images/SS.png',
        imageAlt: 'Student Scores GUI',
        projectTitle: 'Student Scores GUI',
        toolsUsed: 'C# | .NET Core | Git',
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
        //name api
        imageSrc: '../../../assets/project-images/nameAPI.png',
        imageAlt: 'Name API',
        projectTitle: 'Name API',
        toolsUsed: 'C# | ASP.NET Core | Postman | NSwag | Git',
        projectDescription: [
          'Developed a web API using ASP.NET and Entity Framework Core for database connectivity',
          'Implemented a GET HTTP request that returns a name',
        ],
        repoLink: 'https://github.com/NathanBurns3/NameAPI',
      },
      {
        //asynchronous programming
        imageSrc: '../../../assets/project-images/Async.png',
        imageAlt: 'Asynchronous Programming',
        projectTitle: 'Asynchronous Program',
        toolsUsed: 'C# | .NET Core | Git',
        projectDescription: [
          'Developed an application using .NET Core that takes in two text files and asynchronously processes each file',
          'Displays the 10 most used words for each book',
        ],
        repoLink: 'https://github.com/NathanBurns3/AsyncAwait-WindowsForm',
      },
      {
        //recurisve file lister
        imageSrc: '../../../assets/project-images/RFL.png',
        imageAlt: 'Recursive File Lister',
        projectTitle: 'Recursive File Lister',
        toolsUsed: 'Java | JSwing | Git',
        projectDescription: [
          'Created a JSwing application that uses JFileChooser to allow users to select a directory in the system',
          'Uses a recursive approach to list all the files within the chosen directory and any of its sub-directories',
        ],
        repoLink: 'https://github.com/NathanBurns3/Lab-11-Recursive-Filelister',
      },
      {
        //binary search gui
        imageSrc: '../../../assets/project-images/BinarySearch.png',
        imageAlt: 'Binary Search GUI',
        projectTitle: 'Binary Search GUI',
        toolsUsed: 'Java | JSwing | Git',
        projectDescription: [
          'Developed a custom binary search algorithm for efficient string searching in an array',
          'Facilitated user input of strings, sorting them in ascending order for improved searchability',
          'When the requested string was absent, provided the position it would occupy for future input data efficiency',
        ],
        repoLink: 'https://github.com/NathanBurns3/Lab-10-Binary-Search',
      },
      {
        //ski mountain website
        imageSrc: '../../../assets/project-images/SMV.png',
        imageAlt: 'Ski Mountain Website',
        projectTitle: 'Ski Mountain Website',
        toolsUsed: 'HTML | CSS | JavaScript | Git',
        projectDescription: [
          'Designed and developed a responsive website using HTML, CSS, and JavaScript',
          'Included animations and interactive features',
          'Conducted research on US ski resorts and compiled data to assist users in selecting suitable ski packages',
        ],
        repoLink:
          'https://github.com/NathanBurns3/Ski-Mountain-Vacation-Website',
      },
      {
        //vex turning point
        imageSrc: '../../../assets/project-images/turningPoint.jpg',
        imageAlt: 'Vex Turning Point',
        projectTitle: 'Vex Turning Point',
        toolsUsed: 'RobotC | VEX Robotics',
        projectDescription: [
          'Collaborated with a team to design a robot for a fast-paced point system game',
          'Mapped controller buttons to robot motors and gears',
          'Coded an autonomous program in RobotC to position the robot and navigate various platforms',
        ],
      },
      {
        //vex marble sorter
        imageSrc: '../../../assets/project-images/marbleSorter.jpg',
        imageAlt: 'Vex Marble Sorter',
        projectTitle: 'Vex Marble Sorter',
        toolsUsed: 'RobotC | VEX Robotics',
        projectDescription: [
          'Given a task to design and construct a machine to help recycle materials',
          'Coded a program in RobotC that would sense the light given off an object and sort it into assigned slots',
        ],
      },
    ];
  }
}
