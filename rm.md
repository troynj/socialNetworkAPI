# 18 NoSQL: Social Network API

## Summary
For this challenge, I'll be building an API for a social network web application using MongoDB, Mongoose ODM, and Express.js for routing. The API will allow users to share their thoughts, react to friends' thoughts, and create a friend list.

## Prerequisites
To complete this challenge, you should have a good understanding of Node.js, MongoDB, and Mongoose ODM.

## Built with
Node.js
Express.js
MongoDB
Mongoose ODM
Insomnia

## Installation
To install the project, follow these steps:

Clone the repository.

bash
Copy code
git clone git@github.com:example/example.git
Install the dependencies.

bash
Copy code
cd example
npm install
Create a .env file in the root directory and set the MONGODB_URI environment variable to your MongoDB connection string.

bash
Copy code
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<database>?retryWrites=true&w=majority
Start the application.

bash
Copy code
npm start

## Usage
Once the server is running, you can use a tool like Insomnia to test the API.

Users
GET /api/users
Returns all users.

GET /api/users/:userId
Returns a single user by ID.

POST /api/users
Creates a new user.

`{
  "username": "johndoe",
  "email": "johndoe@example.com"
}`

PUT /api/users/:userId
Updates a user by ID.

`{
  "username": "janedoe",
  "email": "janedoe@example.com"
}`

DELETE /api/users/:userId
Deletes a user by ID.

Thoughts
GET /api/thoughts
Returns all thoughts.

GET /api/thoughts/:thoughtId
Returns a single thought by ID.

POST /api/thoughts
Creates a new thought.

`{
  "thoughtText": "Hello, world!",
  "username": "johndoe"
}`

PUT /api/thoughts/:thoughtId
Updates a thought by ID.

`{
  "thoughtText": "Goodbye, world!"
}`

DELETE /api/thoughts/:thoughtId
Deletes a thought by ID.

Reactions
POST /api/thoughts/:thoughtId/reactions
Creates a new reaction for a thought.

`{
  "reactionBody": "I love this!",
  "username": "johndoe"
}`

DELETE /api/thoughts/:thoughtId/reactions/:reactionId
Deletes a reaction for a thought.

Friends
POST /api/users/:userId/friends/:friendId
Adds a friend to a user's friend list.

DELETE /api/users/:userId/friends/:friendId
Removes a friend from a user's friend list.

## Walkthrough Video
Watch the video to see the API in action and how to test it with Insomnia.

## License
Distributed under the MIT License. See LICENSE for more information.