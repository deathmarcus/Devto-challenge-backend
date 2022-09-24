const User = require("../models/user.model");
const bcrypt = require("bcrypt");

// Crear un usuario
const createUser = async (userData) => {
  const hashPassword = await bcrypt.hash(userData.password, 10);
  const user = User.create({ ...userData, password: hashPassword });
  return user;
};

const getUser = (id) => {
  const user = User.findById(id);
  return user;
};

const getGenericUser = (filters) => {
  const user = User.findById(filters.id);
  return user;
};

const editUser = (id, userData) => {
  const changedUser = { ...userData, userChangeDate: Date.now() };
  const editedUser = User.findByIdAndUpdate(id, changedUser, {
    returnDocument: "after",
  });
  return editedUser;
};

const removeUser = (id) => {
  const userDeleted = User.findByIdAndDelete(id);
  return userDeleted;
};

module.exports = {
  createUser,
  getUser,
  editUser,
  removeUser,
  getGenericUser,
};
