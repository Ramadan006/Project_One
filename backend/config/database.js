const { v4: uuidv4 } = require("uuid");

const users = [
  {
    id: uuidv4(),
    username: "Ramazon",
    email: "ramzan06@gmail.com",
    password: "hello12345",
  },
  {
    id: uuidv4(),
    username: "Yusuf",
    email: "yusuf06@gmail.com",
    password: "yusuf2006",
  },
];

const projects = [
  {
    id: uuidv4(),
    title: "Project 1",
    description: "Description 1",
    members: [{ id: "123" }],
    deadline: "12/04/2026",
    status: "Completed",
    ownerId: "UniqueOwnerId456",
  },
  {
    id: uuidv4(),
    title: "Project 2",
    description: "Description 2",
    members: [{ id: "456" }],
    deadline: "10/02/2024",
    status: "In_Progress",
    ownerId: "UniqueOwnerId123",
  },
];

module.exports = {
  users,
  projects,
};
