const getAll = async (repository) => {
    return await repository.getAll();
}

module.exports = {
  getAll,
};
