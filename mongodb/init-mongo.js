db = db.getSiblingDB('testdb');

db.createUser({
  user: 'studyuser',
  pwd: 'studypassword',
  roles: [
    {
      role: 'readWrite',
      db: 'testdb'
    }
  ]
});

db.createCollection('users');
db.createCollection('posts');
db.createCollection('comments');

db.users.insertOne({
  name: 'John Doe',
  email: 'john@example.com',
  age: 30,
  createdAt: new Date()
});

db.posts.insertOne({
  title: '첫 번째 포스트',
  content: '이것은 첫 번째 학습 포스트입니다.',
  author: 'John Doe',
  tags: ['mongodb', 'study', 'database'],
  createdAt: new Date()
});

print('MongoDB 초기화 완료');