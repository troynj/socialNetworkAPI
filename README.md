# socialNetworkAPI

This project is about building an API for a social network where users can share their thoughts, react to friends' thoughts, and create a friend list. The API is built using Express.js for routing, MongoDB database, and Mongoose ODM.

## Table of Contents
## Installation
## Usage
## License

## Installation
Install Node.js.
Install MongoDB.
Clone the repository and navigate to the downloaded folder.
Install the necessary dependencies using the following command:
Copy code
npm install

## Usage
Start the MongoDB server by running the following command:
Copy code
mongod
Seed the database with initial data by running the following command:
Copy code
npm run seed
Start the application using the following command:
sql
Copy code
npm start
Use Insomnia to test the API routes:
GET all users: http://localhost:3001/api/users
GET a single user: http://localhost:3001/api/users/:userId
POST a new user: http://localhost:3001/api/users
PUT update a user: http://localhost:3001/api/users/:userId
DELETE remove a user: http://localhost:3001/api/users/:userId
GET all thoughts: http://localhost:3001/api/thoughts
GET a single thought: http://localhost:3001/api/thoughts/:thoughtId
POST a new thought: http://localhost:3001/api/thoughts
PUT update a thought: http://localhost:3001/api/thoughts/:thoughtId
DELETE remove a thought: http://localhost:3001/api/thoughts/:thoughtId
POST add a reaction to a thought: http://localhost:3001/api/thoughts/:thoughtId/reactions
DELETE remove a reaction from a thought: http://localhost:3001/api/thoughts/:thoughtId/reactions/:reactionId
POST add a friend to a user: http://localhost:3001/api/users/:userId/friends
DELETE remove a friend from a user: http://localhost:3001/api/users/:userId/friends/:friendId

## License
This project is licensed under the MIT license.