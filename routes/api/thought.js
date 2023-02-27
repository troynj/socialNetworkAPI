const router = require('express').Router();
const { Thought } = require('../../models');

// GET all thoughts
router.get('/', async (req, res) => {
  try {
    const thoughts = await Thought.find();
    res.json(thoughts);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// GET to get a single thought by its _id
router.get('/:id', async (req, res) => {
  try {
    const thought = await Thought.findOne({ _id: req.params.id });
    if (!thought) {
      res.status(404).json({ message: 'No thought found with this id!' });
      return;
    }
    res.json(thought);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// POST to create a new thought (don't forget to push the created thought's _id to the associated user's thoughts array field)
router.post('/', async (req, res) => {
  try {
    const thought = await Thought.create(req.body);
    await User.findOneAndUpdate(
      { _id: req.body.userId },
      { $push: { thoughts: thought._id } },
      { new: true }
    );
    res.json(thought);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// PUT to update a thought by its _id
router.put('/:id', async (req, res) => {
  try {
    const thought = await Thought.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { runValidators: true, new: true }
    );
    if (!thought) {
      res.status(404).json({ message: 'No thought found with this id!' });
      return;
    }
    res.json(thought);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// DELETE to remove a thought by its _id
router.delete('/:id', async (req, res) => {
  try {
    const thought = await Thought.findOneAndDelete({ _id: req.params.id });
    if (!thought) {
      res.status(404).json({ message: 'No thought found with this id!' });
      return;
    }
    await User.findOneAndUpdate(
      { username: thought.username },
      { $pull: { thoughts: thought._id } }
    );
    res.json({ message: 'Thought deleted!' });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// POST to create a reaction stored in a single thought's reactions array field
router.post('/:id/reactions', async (req, res) => {
  try {
    const thought = await Thought.findOneAndUpdate(
      { _id: req.params.id },
      { $push: { reactions: req.body } },
      { new: true }
    );
    if (!thought) {
      res.status(404).json({ message: 'No thought found with this id!' });
      return;
    }
    res.json(thought);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// DELETE to pull and remove a reaction by the reaction's reactionId value
router.delete('/:thoughtId/reactions/', async (req, res) => {
  try {
    const updatedThought = await Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $pull: { reactions: { reactionId: req.params.reactionId } } },
      { new: true, runValidators: true }
    );

    if (!updatedThought) {
      return res.status(404).json({ message: 'No thought found with this id!' });
    }

    res.json(updatedThought);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router