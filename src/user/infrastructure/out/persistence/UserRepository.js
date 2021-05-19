const UserModel = require("./UserModel");
const BaseRepository = require("../../../../shared/domain/BaseRepository");

const UserRepository = function UserRepository() {
  BaseRepository.call(this);

  this.getAll = () => {
    return ["Has one item"];
  };

  this.save = async (user) => {
    const doc = await UserModel.create({
      name: user.name,
      surname: user.surname,
    });
    return `User saved: ${doc.name}`;
  };
};

module.exports = UserRepository;
