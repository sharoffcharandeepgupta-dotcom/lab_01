Lab 1: Node.js and Express Server
Subject: Backend Development Fundamentals
Year/Term: Year II, Term II
University: Aurora Deemed to be University
Faculty: Mr. Joel Prashanth D
## Student Details

| Field | Details |
| --- | --- |
| Name | Sharoff Charan deep Gupta |
| Registration Number | 252U1R9146 |
| Section | CSE GENAI 2C |


Deployment
Live application: https://lab-01-hin1.onrender.com/


Project Objective
This lab demonstrates the fundamentals of creating and running a Node.js backend server using Express.js. It covers project initialization with npm, dependency installation, Express application setup, route handling, JSON responses, date and time generation, HTTP status codes, and handling unknown routes.
The project includes a basic Node.js HTTP server and an Express server with three main routes: /, /about, and /time. It also handles unknown routes by returning a 404 status code.
Technologies Used
- Node.js
- Express.js
- npm (Node Package Manager)
- JavaScript (CommonJS)
- HTTP and JSON response handling
- Git and GitHub
Project Folder Structure
lab-01/
├── http-server.js
├── server.js
├── package.json
├── package-lock.json
├── README.md
├── .gitignore
├── node_modules/
└── screenshots/
    ├── home.png
    ├── about.png
    ├── time.png
    └── 404.png
Note: The node_modules/ directory is created automatically when dependencies are installed. Do not upload it to GitHub. Add the screenshots after testing the routes.
Installation and Execution
Prerequisites
- Node.js and npm installed on the computer
- Visual Studio Code or another code editor
- A terminal or command prompt
1. Initialize the project
Open a terminal in the project directory and run:
npm init -y
This command creates the package.json file containing project information and dependency details.
2. Install Express
Run the following command:
npm install express
This installs Express.js and creates the required dependency files.
For an existing project, install the recorded dependencies using:
npm install
3. Start the basic HTTP server
To run the Node.js HTTP server, execute:
node http-server.js
Open the following URL in your browser:
http://localhost:3000
Expected output:
Hello
Stop the server using Ctrl + C before starting another server on the same port.
4. Start the Express server
Run the following command:
node server.js
The server will start on port 3000.
Open:
http://localhost:3000
Stop the server using Ctrl + C when testing is complete.
Endpoints
HTTP Method	Path	Description	Expected Status Code
GET	/	Returns a welcome message	200
GET	/about	Returns the student's name and section in JSON format	200
GET	/time	Returns the current date and time using new Date()	200
GET	Any unknown path	Returns a 404 error message	404


Example Requests
http://localhost:3000/
http://localhost:3000/about
http://localhost:3000/time
http://localhost:3000/unknown
Expected Responses
Home route (/)
Welcome to my Lab 1 Express server!
About route (/about)
{
  "name": "Sharoff Charan deep Gupta",
  "section": "CSE GENAI 2C"
}
Time route (/time)
{
  "currentDateTime": "2026-10-16T06:30:00.000Z"
}
The date and time shown above are illustrative. The actual response will contain the timestamp generated when the route is requested.
Unknown route
{
  "message": "404 - Route not found"
}
The exact response text depends on the message defined in server.js.
Screenshots
Take screenshots of the working application in a browser and save them in the screenshots/ directory.
1. Home Route

![Screenshot](./Screenshot%202026-10-16%20120938.png)
2. About Route

![Screenshot](./Screenshot%202026-10-16%20121020.png)
3. Current Date and Time

![Screenshot](./Screenshot%202026-10-16%20121101.png)
4. Unknown Route (404)

![Screenshot](./Screenshot%202026-10-16%20124805.png)
Note: Replace these image references with actual screenshots saved in the project. The images will not appear until the corresponding files exist.
Deployment
The application can be deployed using a Node.js-compatible hosting service, such as Render, Railway, or the university's Cloud IDE.
For deployment:
1. Upload the project to GitHub.
2. Configure the hosting service to install dependencies using npm install.
3. Set the start command to node server.js.
4. Ensure the application uses the port supplied through the environment variable.
5. Test all endpoints using the public URL.
6. Record the deployed URL in this README.
The deployment URL should be recorded only after successful deployment.
Live URL: https://lab-01-hin1.onrender.com/
Problems Faced and Solutions
Problem	Solution
Understanding how npm manages a project	Used npm init -y to create package.json.
Express was not available initially	Installed Express using npm install express.
Understanding HTTP server creation	Used Node.js's built-in http module to create a basic server.
Handling different types of responses	Used send() for text responses and json() for JSON responses.
Generating the current date and time	Used new Date() in the /time route.
Handling unknown URLs	Added middleware to return a 404 response for unmatched routes.
Avoiding unnecessary files in GitHub	Created a .gitignore file to exclude dependencies and environment secrets.


Learning Outcomes
- Learned how to initialize a Node.js project using npm.
- Understood the purpose of package.json, package-lock.json, and node_modules/.
- Installed and used Express.js.
- Created a basic server using Node.js's built-in HTTP module.
- Developed an Express application that listens on port 3000.
- Implemented GET routes for home, about, and date/time information.
- Returned text and JSON responses from the server.
- Generated the current date and time using new Date().
- Implemented HTTP status codes 200 and 404.
- Learned how to document, test, and prepare a backend project for deployment.
Git Hygiene
Create a .gitignore file in the project root containing:
node_modules/
.env
The following rules should be followed:
- Do not commit the node_modules/ directory.
- Never upload .env files containing secrets or credentials.
- Commit source code, package.json, package-lock.json, README documentation, and required screenshots.
- Use meaningful Git commit messages.
- Keep the GitHub repository public or share it with the faculty as instructed.
Conclusion
This lab provides practical experience in developing a backend server using Node.js and Express.js. It demonstrates how to initialize a project, install dependencies, create routes, return different response formats, generate date and time information, and handle unknown requests with appropriate HTTP status codes. The project also introduces documentation, Git version control, and the basic steps required to deploy a Node.js application.
