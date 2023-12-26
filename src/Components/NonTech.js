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
      <h2 className="mb-4">Non Tech Section</h2>
      <ul className="list-group">
        {nonTechQuestions.map((q, index) => (
          <li key={index} className="list-group-item">
            <div
              onClick={() => toggleQuestion(index)}
              style={{ cursor: 'pointer', marginBottom: '8px' }}
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