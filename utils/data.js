// Helper function to generate random usernames
const getRandomUsername = () => {
  const adjectives = ['happy', 'sad', 'smart', 'funny', 'creative', 'thoughtful'];
  const nouns = ['cat', 'dog', 'bird', 'elephant', 'lion', 'tiger'];
  const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];
  const number = Math.floor(Math.random() * 100);
  return `${adjective}-${noun}-${number}`;
};

// Helper function to generate random thought content
const getRandomThoughtContent = () => {
  const thoughtContent = ['This is my first thought', 'I love coding!', 'What is the meaning of life?', 'This app is so cool!', 'The weather is amazing today', 'I just learned a new skill!', 'I need some coffee', 'Can anyone recommend a good book?'];
  return thoughtContent[Math.floor(Math.random() * thoughtContent.length)];
};

// Helper function to generate random reaction body
const getRandomReactionBody = () => {
  const reactionBody = ['👍', '❤️', '😂', '😍', '🤔', '👀', '🙌', '💯'];
  return reactionBody[Math.floor(Math.random() * reactionBody.length)];
};

const names = [
  'John Smith',
  'Jane Doe',
  'Bob Johnson',
  'Alice Williams',
  'Mike Brown',
  'Karen Davis',
  'David Jones',
  'Mary Wilson',
  'Tom Thompson',
  'Samantha Lee',
  'Brian Jackson',
  'Michelle Martinez',
  'Richard Garcia',
  'Elizabeth Hernandez',
  'Christopher Adams',
  'Stephanie Scott',
  'Kevin Phillips',
  'Catherine Taylor',
  'Joseph Clark',
  'Amanda Wright',
];

const assignments = [
  {
    title: 'Assignment 1',
    score: Math.floor(Math.random() * 100),
    maxScore: 100,
  },
  {
    title: 'Assignment 2',
    score: Math.floor(Math.random() * 100),
    maxScore: 100,
  },
  {
    title: 'Assignment 3',
    score: Math.floor(Math.random() * 100),
    maxScore: 100,
  },
  {
    title: 'Assignment 4',
    score: Math.floor(Math.random() * 100),
    maxScore: 100,
  },
  {
    title: 'Assignment 5',
    score: Math.floor(Math.random() * 100),
    maxScore: 100,
  },
  {
    title: 'Assignment 6',
    score: Math.floor(Math.random() * 100),
    maxScore: 100,
  },
  {
    title: 'Assignment 7',
    score: Math.floor(Math.random() * 100),
    maxScore: 100,
  },
  {
    title: 'Assignment 8',
    score: Math.floor(Math.random() * 100),
    maxScore: 100,
  },
  {
    title: 'Assignment 9',
    score: Math.floor(Math.random() * 100),
    maxScore: 100,
  },
  {
    title: 'Assignment 10',
    score: Math.floor(Math.random() * 100),
    maxScore: 100,
  },
];

module.exports = {
  names,
  assignments,
};
