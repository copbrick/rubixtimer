// import { MongoClient } from 'mongodb';

// const uri = 'mongodb://localhost:27017';
// const name = 'test';

// describe('insert', () => {
//   let connection;
//   let db;

//   beforeAll(async () => {
//     connection = await MongoClient.connect(uri, {
//       useNewUrlParser: true,
//     });
//     db = await connection.db(name);
//   });

//   afterAll(async () => {
//     await connection.close();
//     await db.close();
//   });

//   it('should insert a document into collection', async () => {
//     const posts = db.collection('posts');

//     const mockPost = {_id: 'some-post-id', name: 'Stocks'};
//     await posts.insertOne(mockPost);

//     const insertedPost = await posts.findOne({_id: 'some-post-id'});
//     expect(insertedPost).toEqual(mockPost);
//   });
// });

let add = (a, b) => a + b;
let subtract = (a, b) => a - b;

it('should add two numbers', async () => {
  expect(add(1, 2)).toEqual(3);
  expect(add(1, 2)).not.toEqual(4);
});

it('should subtract two numbers', async () => {
  expect(subtract(1, 2)).toEqual(-1);
  expect(subtract(5,2)).toEqual(3);
  expect(subtract(1, 2)).not.toEqual(0);
  expect(subtract(1, 2)).not.toEqual(1);
});