# AI Certs FullStack Intern Assignment Submission by Aryan Gupta

This project is hosted here: https://ai-certs-fullstack-intern-assignment.onrender.com/

## Getting Started

1. **Clone or Download:**
   - If using Git, clone the repository and navigate to the project folder using the following command:
     ```
     git clone https://github.com/aryanploxxx/AI-Certs-FullStack-Intern-Assignment.git
     ```
     ```
     cd ./AI-Certs-FullStack-Intern-Assignment
     ```
   - Alternatively, download the code as a ZIP file, extract it and navigate to the project folder.

2. **Explore the Structure:**
    - `index.js`: Entry Point of the project. All API Endpoints will be defined here.
    - `views/`: This folder contains all the EJS Templates which will be rendered.
    - `routers/`: Functioning of API Endpoints will be defined here.
    - `README.md`: Documentation for the project.

3. **Setup the Project**
   - Install all the required dependencies.
     ```
     npm install
     ```
   - Run the server.
     ```
     npm start
     ```

## API Endpoints
- **GET /**: Display Home Page with all tasks.
- **GET /tasks**: Retrieve all tasks.
- **GET /tasks/:id**: Retrieve a single task by ID.
- **POST /tasks**: Create a new task.
- **PUT /tasks/:id**: Update an existing task by ID.
- **DELETE /tasks/:id**: Delete a task by ID.
- **GET /update/:id**: Render Update Page with with details of task to be updated.

## Bonus Features
- **Random Background Color**: Each new task is assigned a random background color and stored along with the task schema, so that everytime the page loads, the color of that individual task remains the same.
- **Task Status**: You can set the status of the task to one of the following - Pending (Default), In-Progress, Completed.

## Technologies Used

- NodeJS
- ExpressJS
- TailwindCSS
- HTML

## Video Demo
https://github.com/aryanploxxx/AI-Certs-FullStack-Intern-Assignment/assets/94754702/32c2f9d7-e767-41ed-93a4-96cc0ad38a7b




## Screenshots
|       Display All Tasks        |  Delete a Task  |
:-------------------------:|:-------------------------:
|![image](https://github.com/aryanploxxx/AI-Certs-FullStack-Intern-Assignment/assets/94754702/39f97306-b9a1-4369-816c-f8b4b353b82e) | ![image](https://github.com/aryanploxxx/AI-Certs-FullStack-Intern-Assignment/assets/94754702/53fb2fb7-6c07-4f65-9fcc-7ab2f3c501f1) |

|       Insert Task        |    |
:-------------------------:|:-------------------------:
| ![image](https://github.com/aryanploxxx/AI-Certs-FullStack-Intern-Assignment/assets/94754702/434285dc-d857-40b4-96d8-85f58779a9da) | ![image](https://github.com/aryanploxxx/AI-Certs-FullStack-Intern-Assignment/assets/94754702/f81d5a3a-51a0-4b32-9972-67eea666e165) |

|       Update Task        |    |
:-------------------------:|:-------------------------:
| ![image](https://github.com/aryanploxxx/AI-Certs-FullStack-Intern-Assignment/assets/94754702/6c7dafb6-1412-424a-ae7f-403a3ea5328f) | ![image](https://github.com/aryanploxxx/AI-Certs-FullStack-Intern-Assignment/assets/94754702/974aeec0-9e79-41ee-9627-6f3c17ee2161)|
