// import {jest} from '@jest/globals';
// import { app } from "../src/server.js";
// import supertest from "supertest";

// beforeAll(() => {
//   jest.useFakeTimers();
// });

// describe("api test", () => {
//   it("should GET /api/user", async () => {
//     await supertest(app).get("/api/user").expect(302)
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