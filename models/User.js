const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function(email) {
        // Use a regular expression to validate the email format
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      },
      message: 'Invalid email format'
    }
  },
  thoughts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Thought'
  }],
  friends: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }]
}, { toJSON: { virtuals: true } });

// Define a virtual that retrieves the length of the user's friends array field on query
UserSchema.virtual('thoughtCount').get(function() {
  return this.thoughts.length;
});

// Define a virtual that retrieves the length of the user's friends array field on query
UserSchema.virtual('friendCount').get(function() {
  return this.friends.length;
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
