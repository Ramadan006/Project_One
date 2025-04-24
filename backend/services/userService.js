const { users } = require("../config/database");
const jwt = require("jsonwebtoken");
const { v4: uuidv4 } = require("uuid");

// User register
exports.register = (username, email, password) => {
  if (users.find((user) => user.username === username)) {
    throw Error("Username already taken");
  }
  const newUser = { id: uuidv4(), username, email, password };
  users.push(newUser);
  return { ...newUser };
};

const secretKey = "qwertyuiopasdfghjklzxcvbnm";

// User login
exports.login = (email, password) => {
  if (
    !users.find((user) => user.email === email && user.password === password)
  ) {
    throw Error("Incorrect email or password");
  }
  let token = jwt.sign({ email, password }, secretKey, { expiresIn: "1h" });
  if (!token) {
    return null;
  }
  return token;
};

// Get All Users
exports.getAllUsers = () => {
  return users;
};

// Get user by ID
exports.getUserById = (id) => {
  const foundUser = users.find((user) => user.id === id);
  if (!foundUser) {
    return null;
  }
  return foundUser;
};

// Update user by ID
exports.updateUserById = (id, username, email, password) => {
  const userIndex = users.findIndex((user) => user.id === id);
  if (userIndex === -1) {
    return null;
  }

  const foundUser = users[userIndex]
  const updatedUser = {
    ...foundUser,
    username: username.length !== 0 ? username : foundUser.username,
    email: email.length !== 0 ? email : foundUser.email,
    password: password.length !== 0 ? password : foundUser.password,
  };

  users[userIndex] = updatedUser
  return updatedUser;
};
