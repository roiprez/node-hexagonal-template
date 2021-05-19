const chai = require("chai");
const expect = chai.expect;
const { save } = require('../../../src/user/application/UserCreator')

// The repository should be mocked to test the use cause, not depending on the database
const mockedRepo = null;

describe("Create User", () => {
  it("should create a user", async () => {
    const user = save(mockedRepo, {name: 'testUser', surname: 'surname'})

    expect(user.name).to.equal('testUser');
  });
});
