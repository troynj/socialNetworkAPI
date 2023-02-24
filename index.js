const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

const cwd = process.cwd(); // Get the current working directory

const PORT = 3001;
const app = express(); // Create an instance of Express

// Note: not necessary for the Express server to function. This just helps indicate what activity's server is running in the terminal.
const activity = cwd.includes('01-Activities')
  ? cwd.split('/01-Activities/')[1] // Get the activity name from the current working directory
  : cwd;

// Middleware to parse request bodies as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set up routes
app.use(routes);

// Connect to the database and start the server
db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server for ${activity} running on port ${PORT}!`);
  });
});
