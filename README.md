Backend Task Manager API



A scalable REST API built with Node.js, Express, and MongoDB that supports authentication and task management with JWT security.



Features

\- User Registration

\- User Login with JWT Authentication

\- Password Hashing using bcrypt

\- Protected Routes with Middleware

\- Task CRUD Operations

\- MongoDB Database Integration



Tech Stack

\- Node.js

\- Express.js

\- MongoDB

\- Mongoose

\- JWT

\- bcryptjs



&nbsp;API Endpoints



Authentication

POST /api/register

POST /api/login



Tasks (Protected)

POST /api/tasks

GET /api/tasks

PUT /api/tasks/:id

DELETE /api/tasks/:id



Project Structure



backend-assignment

│

├── config

├── controllers

├── middleware

├── models

├── routes

└── server.js



Run Locally



Install dependencies:



npm install



Run server:



node server.js

