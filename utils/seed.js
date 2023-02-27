const mongoose = require('mongoose');
const { User, Thought } = require('../models');
const db = require('../config/connection');

const userData = [
  {
    username: 'john_doe',
    email: 'johndoe@gmail.com',
  },
  {
    username: 'jane_doe',
    email: 'janedoe@gmail.com',
  },
  {
    username: 'bob_smith',
    email: 'bobsmith@gmail.com',
  },
];

const thoughtData = [
  {
    thoughtText: 'This is my first thought!',
    username: 'john_doe',
  },
  {
    thoughtText: 'This is another thought!',
    username: 'jane_doe',
  },
  {
    thoughtText: 'Thought number three!',
    username: 'bob_smith',
  },
];

const reactionData = [
  {
    reactionBody: 'Great thought!',
    username: 'jane_doe',
  },
  {
    reactionBody: 'I agree!',
    username: 'bob_smith',
  },
  {
    reactionBody: 'Nice post!',
    username: 'john_doe',
  },
];

db.once('open', async () => {
  try {
    // Remove existing data
    await User.deleteMany({});
    await Thought.deleteMany({});

    // Insert sample data
    const users = await User.insertMany(userData);
    const thoughts = await Thought.insertMany(thoughtData);

    // Associate thoughts with users
    for (let i = 0; i < thoughts.length; i++) {
      const thought = thoughts[i];
      const user = users.find((user) => user.username === thought.username);
      user.thoughts.push(thought);
      await user.save();
    }

    // Associate reactions with thoughts
    for (let i = 0; i < reactionData.length; i++) {
      const reaction = reactionData[i];
      const thought = thoughts[i % thoughts.length];
      reaction.thoughtId = thought._id;
      thought.reactions.push(reaction);
      await thought.save();
    }

    console.log('Seed data inserted!');
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
});
