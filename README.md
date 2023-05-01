#Users manager

This project was created using NestJS and the ORM Prisma and contains a REST API.

##API Endpoints
GET /users - retrieves a list of users
GET /user/{id} - retrieves a specific user
POST /users - creates a new user
PUT /users/{id} - updates user
DELETE /users/{id} - deletes a user

##Steps to run the project:

1. Clone the repository to your local machine.
2. Install dependencies by running `npm install`.
3. Launch the database by running `docker compose up dev-db -d`.
4. Start the backend server by running `nest start`.

Technologies:
 - NestJS
 - Express
 - TypeScript

