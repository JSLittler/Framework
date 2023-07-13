db = db.getSiblingDB('game-engine');

db.createCollection('users');

db.users.insertMany(
  [
    {
      _id: 1,
      name: 'John',
      password: 'john'
    },
    {
      _id: 2,
      name: 'dave',
      password: 'dave'
    }
  ]
);
