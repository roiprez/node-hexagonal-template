const User = require("../domain/User");

const save = async (repository, { name, surname }) => {
  const user = new User(name, surname);
  return await repository.save(user);
};

module.exports = {
  save,
};
