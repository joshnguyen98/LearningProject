const app = require("../server/app");
const request = require("supertest");

const db = require("../db/connection");
const seed = require("../db/seeds/seed");
const testData = require("../db/data/test-data/index");

afterAll(() => db.end());
beforeEach(() => seed(testData));

describe("GET /api/users", () => {
  test("200: returns an array of user objects", () => {
    return request(app)
      .get("/api/users")
      .expect(200)
      .then(({ body }) => {
        const users = body;
        expect(users).toBeInstanceOf(Array);
        expect(users).toHaveLength(3);
        users.forEach((user) => {
          expect(user).toEqual(
            expect.objectContaining({
              id: expect.any(Number),
              username: expect.any(String),
              email: expect.any(String),
            })
          );
        });
      });
  });
});
