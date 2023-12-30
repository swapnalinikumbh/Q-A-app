import React, { useState } from 'react'

const NonTech = () => {
  const nonTechQuestions = [
    {
      question: '1.	Gits command ??',
      answer: (
        <>
          <strong>git init: </strong>Initializes a new Git repository in the current directory.<br /><br />
          <strong>git clone [repository URL]: </strong>Creates a copy of a remote Git repository on local machine.<br /><br />
          <strong>git add [file(s)]: </strong>Stages changes for commit. We can specify specific files or use a dot. to stage all changes.<br /><br />
          <strong>git commit -m "Commit message": </strong>Records the staged changes with a descriptive commit message.<br /><br />
          <strong>git status: </strong>Shows the status of working directory, including untracked, modified, and staged files.<br /><br />
          <strong>git log: </strong>Displays a log of all commits in the current branch, showing commit IDs, authors, dates, and commit messages.<br /><br />
          <strong>git branch: </strong>Lists all branches in repository and indicates the currently active branch.<br /><br />
          <strong>git checkout [branch name or commit ID]: </strong>Switches to a different branch or commit. Useful for navigating between branches or checking out specific points in history.<br /><br />
          <strong>git merge [branch name]: </strong>Combines changes from one branch into another. Often used to merge feature branches into the main branch.<br /><br />
          <strong>git pull: </strong>Fetches changes from a remote repository and merges them into the current branch.<br /><br />
          <strong>git push: </strong>Pushes local commits to a remote repository.<br /><br />
          <strong>git remote -v: </strong>Lists all remote repositories associated with local repository and their URLs.<br /><br />
          <strong>git fetch: </strong>Fetches changes from a remote repository but doesn't merge them. Useful for checking for updates without affecting local branch.<br /><br />
          <strong>git diff: </strong>Shows the differences between  working directory and the last commit.<br /><br />
          <strong>git reset [file]: </strong>Unstages a file, effectively removing it from the staging area.<br /><br />
          <strong>git stash: </strong>Temporarily saves changes that are not ready to be committed. Useful for switching branches without committing unfinished work.<br /><br />
          <strong>git remote add [name] [URL]: </strong>Adds a new remote repository with a specified name and URL.<br /><br />
          <strong>git remote remove [name]: </strong>Removes a remote repository.<br /><br />
          <strong>git branch -d [branch name]: </strong>Deletes a local branch. Use -D instead of -d to forcefully delete a branch.<br /><br />
          <strong>git config: </strong>Allows us to configure Git settings, such as name and email.<br /><br />
          <strong>git patch: </strong>To create a Git patch, we first need to identify the changes we want to include in the patch.<br /><br />
        </>
      ),
    },
    {
      question: '2.	Pull/clone specific branch from git?',
      answer: (
        <>
          <ul>
            <li>Open terminal or command prompt.</li>
            <li>Navigate to the local Git repository where we want to pull the specific branch. </li>
            <li>To pull the specific branch, use the git pull command </li>
            <li>Git will fetch the latest changes from the specified branch on the remote repository and merge them into current local branch. </li>
          </ul>
        </>
      ),
    },
    {
      question: '4.	SDLCs in react developer?',
      answer: (
        <>
          The Software Development Life Cycle (SDLC) is a framework that defines the processes and activities involved in developing software applications.Agile methodologies, such as Scrum or Kanban, are often employed in React development to enable flexibility, collaboration, and continuous improvement throughout the SDLC phases.<br /> <br />
          <strong>Requirements Gathering: </strong>This phase involves understanding and documenting the project requirements. It includes discussions with stakeholders, product owners, and end-users to gather functional and non-functional requirements.<br /><br />
          <strong>Planning: </strong>In this phase, we create a project plan outlining the development approach, timelines, resource allocation, and overall project structure. This plan may include tasks such as creating wireframes, mockups, and defining the technology stack, including React.<br /><br />
          <strong>Design: </strong>The design phase focuses on creating the user interface (UI) and user experience (UX) of React application. We'll design the layout, navigation, components, and interactions based on the requirements gathered earlier. Tools like Figma or Sketch can be helpful in creating visual designs and prototypes.<br /><br />
          <strong>Development: </strong>This phase involves writing the code for React application. We'll implement the UI components, business logic, data handling, and any integration with backend systems or APIs. We can use tools like Create React App or Next.js to scaffold project and streamline the development process.<br /><br />
          <strong>Testing: </strong>Testing is a crucial part of the SDLC. We can perform different types of testing in React development, including unit testing, integration testing, and end-to-end testing. Frameworks like Jest, React Testing Library, or Cypress can assist in writing and running tests for React components and application.<br /><br />
          <strong>Deployment: </strong>Once development and testing are complete, it's time to deploy React application. We can choose various hosting options, such as cloud platforms like AWS, Netlify, or Vercel. Consider setting up a continuous integration and deployment (CI/CD) pipeline to automate the deployment process.<br /><br />
          <strong>Maintenance: </strong>After deployment, we'll need to maintain and support  React application. This includes monitoring its performance, addressing any issues or bugs that arise, and releasing updates or new features. Regular maintenance ensures the application remains secure, stable, and aligned with evolving requirements.<br /><br />
        </>
      ),
    },
    {
      question: '5.	Difference between git and githubs?',
      answer: (
        <>
          Git and GitHub are related but distinct entities in the world of version control and software development. Git is a distributed version control system that allows developers to track changes locally, while GitHub is a web-based hosting platform built around Git that provides collaboration features, project management tools, and a centralized location for sharing and managing Git repositories.<br /><br />
          <strong>Git:</strong>
          <ul>
            <li>Git is a distributed version control system (VCS) designed for tracking changes in source code during software development.</li>
            <li>It allows multiple developers to collaborate on a project by keeping track of changes to files and enabling easy branching, merging, and version management.</li>
            <li>Git operates locally on a developer's machine, meaning that it doesn't require a network connection to perform most operations.</li>
            <li>Developers can create local repositories, commit changes to their own branches, and synchronize their work with remote repositories.</li>
          </ul>
          <strong>GitHub:</strong>
          <ul>
            <li>GitHub is a web-based hosting platform that provides a centralized location for Git repositories.</li>
            <li>It offers a range of additional features on top of Git, including collaboration tools, issue tracking, project management, and code review.</li>
            <li>GitHub allows developers to create remote repositories and share their code with others.</li>
            <li>It provides a web-based interface to manage repositories, view code history, review and discuss changes, and perform pull requests to merge code from different branches.</li>
            <li>GitHub also offers features like wikis, project boards, continuous integration, and deployment workflows to enhance the development process.
              -It allows developers to easily share their code with the wider community, contribute to open-source projects, and discover projects from other developers.
            </li>
          </ul>
        </>
      ),
    },
    {
      question: '6.	Agiles scrum?',
      answer: (
        <>
          Agile Scrum is a popular framework for managing and organizing the development of complex projects, particularly in the field of software development. It emphasizes iterative and incremental delivery, collaboration, and flexibility. <br /><br />
          <strong>Scrum Team: A Scrum team consists of three primary roles:</strong><br />
          <strong>Product Owner: </strong>Represents the stakeholders, defines the product vision, and prioritizes the product backlog.<br /><br />
          <strong>Scrum Master: </strong>Facilitates the Scrum process, removes impediments, and ensures the team follows Scrum principles.<br /><br />
          <strong>Development Team: </strong>Responsible for delivering the product increments. Typically, cross-functional and self-organizing.<br /><br />
          <strong>Product Backlog: </strong>It is a prioritized list of features, user stories, and requirements that represent the desired functionalities of the product. The Product Owner maintains and continuously refines the backlog based on feedback and changing priorities.<br /><br />
          <strong>Sprints: </strong>Sprints are time-boxed iterations, typically lasting two to four weeks. During each sprint, the team selects a set of items from the product backlog and commits to delivering a potentially shippable increment of the product.<br /><br />
          <strong>Sprint Planning: </strong>At the beginning of each sprint, the team holds a sprint planning meeting. They discuss and clarify the selected backlog items, determine the work to be done, and establish a sprint goal.<br /><br />
          <strong>Daily Scrum: </strong>A short daily stand-up meeting is conducted, known as the Daily Scrum or Daily Stand-up. Each team member shares progress, discusses any challenges or blockers, and aligns the day's work.<br /><br />
          <strong>Sprint Review: </strong>At the end of each sprint, a sprint review is held to demonstrate the completed work to the stakeholders. Feedback is gathered, and the product backlog is adjusted accordingly.<br /><br />
          <strong>Sprint Retrospective: </strong>The team conducts a retrospective meeting after each sprint to reflect on the process and identify areas for improvement. They discuss "what went well", "what could be improved", and "define actionable steps for the next sprint".<br /><br />
          <strong>Agile Principles: </strong>: Agile Scrum follows the Agile Manifesto's principles, which emphasize customer collaboration, responding to change, delivering working software frequently, and valuing individuals and interactions over processes and tools.Agile Scrum promotes transparency, adaptability, and continuous improvement throughout the development process. It allows teams to deliver high-quality products incrementally while accommodating changing requirements and feedback from stakeholders.<br /><br />
          <strong>responsibilities </strong>
          <ul>
            <li>1. My primary responsibility was to participate in the development of software products or features. This involved writing code.</li>
            <li>2. I actively participated in sprint planning meetings.</li>
            <li>3. I attended daily standup meetings to provide updates on my progress.</li>
            <li>4. Collaboration was a key aspect of my role. I worked closely with cross-functional team members.</li>
            <li>5. I actively contributed to process improvement discussions.</li>
            <li>6. I adhered to Scrum principles, such as time-boxed sprints, delivering potentially shippable increments, and embracing change.</li>
            <li>7. I maintained documentation as necessary.</li>
          </ul>
        </>
      ),
    },
    {
      question: '7.	How do we handle day-to-day issues and performance tuning in applications?',
      answer: (
        <>
          <strong>Day-to-Day Issue Handling:</strong><br />
          <ul>
            <li>Monitoring and Debugging,</li>
            <li>Issue Prioritization</li>
            <li>collaboration with cross-functional teams</li>
            <li>Version Control to track changes </li>
          </ul>
          <strong>Performance Optimization:</strong><br />
          <ul>
            <li>Code Splitting</li>
            <li>Lazy Loading</li>
            <li>Server-Side Rendering (SSR)</li>
            <li>Optimizing Images and Assets</li>
            <li>Memorization and Caching</li>
            <li>Reducing Network Requests</li>
            <li>Removing Unused Code</li>
          </ul>
        </>
      ),
    },
    {
      question: '8.	Can we describe a project where we had to work with JIRAs for project management? What was role and how did we use JIRA to track progress?',
      answer: (
        <>
          I've had the opportunity to work on several projects where JIRA was the primary project management tool. One notable project where I used JIRA extensively was [Project Name]. In this project, I played the role of "Software Developer" and I relied on JIRA for efficient project tracking and management.JIRA played a pivotal role in our project's success by providing a centralized platform for project management, task tracking, and collaboration. It helped us stay organized, meet sprint goals, and deliver high-quality software within the project timeline.<br /><br />
          <strong>Role and Responsibilities:</strong>As a software developer, my responsibilities included [Briefly describe responsibilities in the project, e.g., "developing software features," "participating in daily standups," "conducting code reviews," "ensuring sprint goals were met," etc.]. I worked closely with a cross-functional team, including product owners, designers, and QA engineers, to deliver high-quality software within scheduled sprints.<br /><br />
          <strong>Using JIRA for Progress Tracking:</strong><br />
          <strong>Sprint Planning:</strong>At the beginning of each sprint, we used JIRA to create and manage sprint boards. Sprint planning meetings were held to review the product backlog and select user stories to be worked on during the sprint. JIRA's backlog management feature allowed us to prioritize and estimate tasks effectively.<br /><br />
          <strong>Task Assignment:</strong>JIRA's assignable tasks feature was instrumental in assigning user stories and tasks to team members. It helped ensure that everyone had a clear understanding of their responsibilities for the sprint.<br /><br />
          <strong>Daily Standups:</strong>During daily standup meetings, team members provided status updates using JIRA. We used the "Work Log" feature to record our progress, discuss any blockers or issues, and coordinate on tasks. JIRA's customizable workflows allowed us to define our own issue statuses to match our development process.<br /><br />
          <strong>Task Progress Tracking:</strong>JIRA's Agile boards, such as Scrum and Kanban boards, were used to visualize the progress of tasks and user stories. We could easily move tasks across columns (e.g., "To Do," "In Progress," "Done") to reflect their current status.<br /><br />
          <strong>Bug and Issue Tracking:</strong>JIRA was also our primary tool for tracking and managing bugs and issues. We created detailed bug reports, assigned them to team members, and monitored their resolution progress through JIRA's issue tracking system.<br /><br />
          <strong>Reporting and Dashboards:</strong>JIRA's reporting and dashboard features allowed us to generate custom reports and charts to track sprint velocity, burndown rates, and team performance. These insights were valuable for retrospectives and process improvements.<br /><br />
          <strong>Integration with Other Tools:</strong>We integrated JIRA with other development tools and services, such as Git and Jenkins, to streamline our development and deployment workflows. This integration helped automate tasks and reduce manual effort.
        </>
      ),
    },
    {
      question: '9.	cicds pipeline?',
      answer: (
        <>
          A CI/CD (Continuous Integration and Continuous Deployment/Delivery) pipeline is a set of automated processes and tools that allow software developers to efficiently and consistently build, test, and deploy their code to production or other environments. CI/CD pipelines are a fundamental part of modern software development and are crucial for achieving automation, speed, and reliability in the software development lifecycle.<br /><br />
          <strong>Continuous Integration (CI):</strong><br /><br />
          <h6>Code Integration: </h6>Developers frequently push their code changes to a shared repository (e.g., Git). In CI, these changes are automatically integrated into a common codebase.<br />
          <h6>Automated Builds: </h6>Whenever code changes are pushed, an automated build process is triggered. This process compiles code, runs tests, and generates artifacts (e.g., executables, libraries).<br />
          <h6>Automated Testing: </h6>After the build, automated tests are executed to check for regressions or issues introduced by the code changes. Common types of tests include unit tests, integration tests, and end-to-end tests.<br />
          <h6>Feedback Loop: </h6>Developers receive immediate feedback on whether their code changes have passed all tests. If issues are found, they can be addressed quickly.<br /><br />
          <strong>Continuous Deployment (CD) or Continuous Delivery (CD):</strong><br /><br />
          <h6>Continuous Deployment: </h6>In this model, if code changes pass all tests, they are automatically deployed to production without manual intervention. This approach is suitable for applications that can tolerate frequent updates and require high agility.<br />
          <h6>Continuous Delivery: </h6>In this model, code changes are automatically deployed to a staging or pre-production environment after passing tests. However, the decision to deploy to production is made manually. This approach is often used for applications that require additional human approval or compliance checks before going live.<br />
          <h6>Automation and Orchestration:</h6>CI/CD pipelines are typically managed and automated using CI/CD tools like Jenkins, Travis CI, CircleCI, GitLab CI/CD, and others. These tools allow us to define the entire pipeline, including the build, test, and deployment stages.<br />
          <h6>Deployment Strategies:</h6>CI/CD pipelines can implement various deployment strategies, such as blue-green deployments, canary releases, or rolling deployments, to minimize the impact of updates on users and ensure high availability.<br />
          <h6>Infrastructure as Code (IaC):</h6>To ensure consistency between development, testing, and production environments, CI/CD pipelines often use Infrastructure as Code (IaC) tools like Terraform or AWS CloudFormation to provision and manage infrastructure.<br />
          <h6>Monitoring and Logging:</h6>Monitoring and logging are integral parts of CI/CD pipelines. Continuous monitoring helps detect issues in real-time, while logs provide visibility into pipeline execution and application behavior.<br />
          <h6>Security Scanning:</h6>CI/CD pipelines can include security scanning tools to check for vulnerabilities, compliance violations, and other security issues in the code and dependencies.<br /><br />
          <strong>Benefits of CI/CD pipelines include:</strong><br /><br />
          <h6>Faster Delivery: </h6>Code changes can be delivered to production or staging environments quickly, reducing time-to-market.<br />
          <h6>Consistency: </h6>Automation ensures consistent and reproducible builds and deployments across environments.<br />
          <h6>Reduced Manual Errors: </h6>Automation minimizes the risk of human errors that can occur during manual processes.<br />
          <h6>Rapid Feedback: </h6>Developers receive immediate feedback on the quality of their code, allowing them to address issues early in the development process.<br />
          <h6>Increased Collaboration: </h6>CI/CD encourages collaboration among developers, testers, and operations teams, promoting a DevOps culture.<br />-Overall, CI/CD pipelines are a crucial part of modern software development, enabling teams to build, test, and deploy software continuously and efficiently while maintaining high quality and reliability.
        </>
      ),
    },
    {
      question: '10.	Typical week for react developer Works?',
      answer: (
        <>
          <strong>Monday to Wednesday:</strong><br /><br />
          <h6>Coding: </h6>Write and maintain React components to build and enhance web applications.<br />
          <h6>Bug Fixing: </h6>Identify and fix any issues or bugs in the application.<br />
          <h6>Code Review: </h6>Review code from team members and provide feedback.<br /><br />
          <strong>Thursday: </strong><br /><br />
          <h6>Meetings: </h6>Attend team meetings, including sprint planning, stand-ups, and discussions with designers and product managers.<br /><br />
          <strong>Friday:  </strong><br /><br />
          <h6>Testing: </h6>Perform testing, including unit tests, integration tests, and user interface testing.<br />
          <h6>Optimization: </h6>Optimize the application for performance and responsiveness.<br />
          <h6>Documentation: </h6>Update documentation for code and application features.<br /><br />
          <strong>Throughout the week: </strong><br /><br />
          <h6>Collaboration: </h6>Collaborate with designers and backend developers to integrate UI designs and API endpoints.<br />
          <h6>Version Control: </h6>Use tools like Git to manage code versions and collaborate with the development team.<br />
          <h6>Learning: </h6>Stay updated on React and web development trends through self-learning and online resources.<br />
          <h6>Problem Solving: </h6>Troubleshoot and solve issues that arise during development.This schedule may vary based on project timelines and team structures, but it provides a simplified overview of a React developer's typical workweek.
        </>
      ),
    },
    {
      question: '11.	What time react developer daily stand up?',
      answer: (
        <>
          <strong>Start of the Workday: </strong>Many teams prefer to have their daily stand-up at the beginning of the workday, typically around 9:00 AM. This allows team members to align on tasks and goals for the day ahead.<br /><br />
          <strong>Mid-Morning: </strong>Some teams schedule their stand-up around 10:00 AM, giving developers time to check emails, prepare for the meeting, and address any immediate issues first thing in the morning.<br /><br />
          <strong>After Lunch: </strong>A few teams choose to have their stand-up after lunch, around 1:00 PM. This can be suitable for teams with flexible working hours or those who find that the post-lunch timeframe works best for their members.<br /><br />
          <strong>End of the Workday: </strong>In certain cases, teams may prefer to wrap up the day with a stand-up meeting, typically around 4:00 PM. This can serve as a retrospective for the day's work and a planning session for the next day.<br /><br />
          <strong>Variable Timing: </strong>Some teams use tools like scheduling software or voting systems to determine the most convenient time for the daily stand-up, taking into account individual availability and preferences.<br />
          -the duration of the daily stand-up meeting is typically kept short, often limited to 15 minutes, to keep it focused and efficient.
        </>
      ),
    },
    {
      question: '12.	Difference between npxs and npms?',
      answer: (
        <>
          npx and npm are both command-line tools in the Node.js ecosystem<br /><br />
          <strong>npm (Node Package Manager):</strong>-npm is primarily a package manager for Node.js.<br />
          -It is used to install, manage, and publish packages (JavaScript libraries and tools) for use in Node.js projects or for client-side development with tools like Webpack.<br />
          -We use npm to install packages globally (for system-wide use) or locally (specific to a project).<br />
          -Common npm commands include npm install, npm init, and npm start.<br /><br />
          <strong>npx (Node Package Execute):</strong>-npx is a package runner tool that comes with npm (5.2.0 and higher).<br />
          -It is used to execute packages from the npm registry (or locally installed) without the need to install them globally or locally.<br />
          -npx is often used for running one-off commands or for executing binaries from packages temporarily, without cluttering  project with global installs.<br />
          -It can be used to run a package once, such as npx create-react-app my-app, where create-react-app is executed without installing it globally or locally.
        </>
      ),
    },
    {
      question: '13.	When you create new feature you push to master or new branch?',
      answer: (
        <>
          When we're working on a new feature in a Git-based development workflow, it's generally a best practice to create a new branch for that feature rather than directly pushing it to the master (or main) branch.<br /><br />
          <strong>git checkout -b feature/my-new-feature </strong>to create new branch,<br />
          <strong>git checkout master </strong>to merge into,<br />
          <strong>git push </strong>origin master.
        </>
      ),
    },
    {
      question: '',
      answer: '',
    },
    {
      question: '',
      answer: '',
    },
    {
      question: '',
      answer: '',
    },
    // Add more questions and answers as needed
  ];

  // State to manage which question is currently expanded
  const [expandedQuestion, setExpandedQuestion] = useState(null);

  // Function to toggle the expanded question
  const toggleQuestion = (index) => {
    setExpandedQuestion((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="container mt-5">
      <h2 style={{ marginTop: '7rem' }} className="mb-4">Non Tech Section</h2>
      <ul className="list-group">
        {nonTechQuestions.map((q, index) => (
          <li key={index} className="list-group-item">
            <div
              onClick={() => toggleQuestion(index)}
              style={{ cursor: 'pointer', marginBottom: '8px', fontSize: '18px', }}
              className="font-weight-bold"
            >
              {q.question}
            </div>
            {expandedQuestion === index && <div className="answer-container bg-light-blue text-dark p-3">{q.answer}</div>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NonTech