const router = require('express').Router();
const { User } = require('../../models');

// GET all users
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// GET a single user by its _id and populated thought and friend data
router.get('/:_id', async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params._id })
      .populate({
        path: 'thoughts',
        select: '-__v'
      })
      .populate({
        path: 'friends',
        select: '-__v'
      });
    if (!user) {
      return res.status(404).json({ message: 'No user with that ID' });
    }
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// POST a new user
router.post('/', async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// PUT to update a user by its _id
router.put('/:id', async (req, res) => {
  try {
    const user = await User.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
      runValidators: true
    });
    if (!user) {
      return res.status(404).json({ message: 'No user with that ID' });
    }
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// DELETE to remove user by its _id
router.delete('/:id', async (req, res) => {
  try {
    const user = await User.findOneAndDelete({ _id: req.params.id });
    if (!user) {
      return res.status(404).json({ message: 'No user with that ID' });
    }
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// POST to add a new friend to a user's friend list
router.post('/:id/friends', async (req, res) => {
  try {
    const user = await User.findOneAndUpdate(
      { _id: req.params.id },
      { $push: { friends: req.body } },
      { new: true, runValidators: true }
    );
    if (!user) {
      return res.status(404).json({ message: 'No user with that ID' });
    }
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// DELETE to remove a friend from a user's friend list
router.delete('/:id/friends/:friendId', async (req, res) => {
  try {
    const user = await User.findOneAndUpdate(
      { _id: req.params.id },
      { $pull: { friends: { _id: req.params.friendId } } },
      { new: true }
    );
    if (!user) {
      return res.status(404).json({ message: 'No user with that ID' });
    }
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router