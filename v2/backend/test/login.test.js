import request from "supertest";
import app from "../index.js"


test("GET auth/login should fail", async () => {
  const response = await request(app).get("/auth/login").send({
    username: "ciga",
    password: "ciga"
    
   
  });

  expect(response.status).toBe(400);
});