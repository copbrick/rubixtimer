import {jest} from '@jest/globals';
import { app } from "../src/server.js";
import supertest from "supertest";

beforeAll(() => {
  jest.useFakeTimers();
});

describe("api test", () => {
  it("should GET /api/user", async () => {
    await supertest(app).get("/api/user").expect(302)
  });
});

