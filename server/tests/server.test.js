import { app } from "../src/server.js";
import supertest from "supertest";

test("GET /api/user", async () => {
  await supertest(app).get("/api/user").expect(302);
});
