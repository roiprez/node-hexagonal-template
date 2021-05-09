const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = chai.expect;
const app = require("../../../../../app");

chai.use(chaiHttp);

describe("GET /api/v1/user", () => {
  it("should return status 200", async () => {
    let res = await chai.request(app).get("/api/v1/user");

    expect(res.status).to.equal(200);
    expect(res.body.results).to.be.instanceof(Array);
    expect(res.body.results).to.be.empty;
  });
});
