const User = require("../../../domain/User");

const getAll = async () => {
  return await User.find({});
};

module.exports = {
  getAll,
};
