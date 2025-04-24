const userService = require("../services/userService");

// User register
exports.register = (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res.status(401).json({ message: "Fill all required fields" });
  }
  try {
    const user = userService.register(username, email, password);
    res.status(201).json({ user, message: "User registered successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// User login
exports.login = (req, res) => {
  const { email, password } = req.body;
  if (!email && !password) {
    res.status(400).json({ message: "Email and Password are required" });
  }
  try {
    let token = userService.login(email, password);
    return res.status(200).json({ token, message: "Successfully login" });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

// Get all users
exports.getUsers = (req, res) => {
  const users = userService.getAllUsers();
  return res.status(200).json([...users]);
};

// Get user by Id
exports.getUserById = (req, res) => {
  const { id } = req.params;
  const foundUser = userService.getUserById(id);
  if (!foundUser) {
    return res.status(401).json({ message: "User not found" });
  }
  return res.status(200).json({ ...foundUser });
};

// Update user by Id
exports.updateUser = (req, res) => {
  const { id } = req.params;
  const { username, email, password } = req.body;

  const updatedUser = userService.updateUserById(id, username, email, password);
  return res.status(201).json({ updatedUser, message: "Updated successfully" });
};
