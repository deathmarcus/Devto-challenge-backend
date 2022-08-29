const User = require("../models/user.model")
const bcrypt = require("bcrypt")


// Crear un usuario
const createUser = async (userData) => {
  console.log(userData)
  const hashPassword = await bcrypt.hash(userData.password, 10)
  console.log(hashPassword)
  const user =  User.create({...userData, password: hashPassword })
  return user
}

const getUser = (id) => {
  const user = User.findById(id)
  const { userNickname, userProfilepic } = user
  return { userNickname, userProfilepic }
}



module.exports = {
  createUser,
  getUser
}