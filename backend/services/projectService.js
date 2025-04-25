const { projects, users } = require("../config/database");
const { v4: uuidv4 } = require("uuid");

// Create Project
exports.createProject = (
  title,
  description,
  members,
  deadline,
  status,
  ownerId
) => {
  const project = {
    id: uuidv4(),
    title,
    description,
    members,
    deadline,
    status,
    ownerId,
  };
  projects.push(project);
  //   console.log("Generated project ID:", project.id);
  return project;
};

// Get Project by Id
exports.getProjectById = (id) => {
  return projects.find((project) => project.id === id);
};

// Get Projects
exports.getAllProjects = () => {
  return projects;
};

// Update Project
exports.updateProjectById = (
  id,
  title,
  description,
  members,
  deadline,
  status
) => {
  const projectIndex = projects.findIndex((project) => project.id === id);

  if (projectIndex === -1) {
    return null;
  }

  const foundProject = projects[projectIndex];
  const updatedProject = {
    ...foundProject,
    title: title.length !== 0 ? title : foundProject.title,
    description:
      description.length !== 0 ? description : foundProject.description,
    members: members.length !== 0 ? members : foundProject.members,
    deadline: deadline.length !== 0 ? deadline : foundProject.deadline,
    status: status.length !== 0 ? status : foundProject.status,
  };
  projects[projectIndex] = updatedProject;
  return updatedProject;
};

// Delete Project
exports.deleteProjectById = (id) => {
  const projectIndex = projects.findIndex((project) => project.id === id);

  if (projectIndex === -1) {
    return null;
  }

  const deletedProject = projects.splice(projectIndex, 1);
  return deletedProject[0];
};
