const chai = require("chai");
const User = require("../../../../../src/user/domain/User");
const expect = chai.expect;
const { save } = require('../../../src/user/application/UserCreator')
const UserRepository = require("../../../src/user/infrastructure/out/persistence/UserRepository");
const User = require("../../../src/user/domain/User");

const repository = new UserRepository();

describe("Create User", () => {
  it("should create a user", async () => {
    const user = repository.save(new User('TestUser', 'surname'));

    expect(user.name).to.equal('testUser');
  });
});
