import request from "supertest";
import app from "../index.js"

test("POST auth/register should fail", async () => {
  const response = await request(app).post("/auth/register").send({
    username: "test",
    name: "test",
    email: "test@gmail.com",
    password: "test",
    groupName: "ADMIN"
   
  });

  expect(response.status).toBe(400);
});