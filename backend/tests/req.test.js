const server = require("../src/app.ts");
const supertest = require("supertest");
const requestWithSupertest = supertest(server);

describe("Get JSON data", () => {
  it("Get / should have JSON with the sum property ", async () => {
    const res = await requestWithSupertest.get("/");
    expect(res.status).toBe(200);
    expect(res.type).toEqual(expect.stringContaining("json"));
    expect(res.body).toHaveProperty("sum");
  });
});

describe("POST", () => {
  it("POST /api should return string", async () => {
    const res = await requestWithSupertest.post("/api");
    expect(res.status).toBe(400);
    expect(res.type).toEqual(expect.stringContaining("json"));
    expect(res.body).toHaveProperty("error");
    expect(res.body.error).toBe("wrong request");
  });
});

describe("Provide data to the endpoint", () => {
  it("POST /api/?action=sumandcheck&numbers=1,2 should return isPrime=true and sum=3", async () => {
    let res = await requestWithSupertest.post(
      "/api/?action=sumandcheck&numbers=1,2"
    );
    expect(res.status).toBe(200);
    res = await requestWithSupertest.get("/");
    expect(res.type).toEqual(expect.stringContaining("json"));
    expect(res.body).toHaveProperty("sum");
    expect(res.body.sum).toBe(3);
    expect(res.body).toHaveProperty("secondendpoint");
    expect(res.body.secondendpoint).toBe(true);
  });
});
