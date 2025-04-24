const projectService = require("../services/projectService");

// Create Project
exports.create = (req, res) => {
  const { title, description, members, deadline, status, ownerId } = req.body;
  try {
    const project = projectService.createProject(
      title,
      description,
      members,
      deadline,
      status,
      ownerId
    );
    return res
      .status(201)
      .json({ project, message: "Project created successfully" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Get Projects
exports.getProjects = (req, res) => {
  const projects = projectService.getAllProjects();
  return res.status(200).json([...projects]);
};

// Update Project by Id
exports.updateProject = (req, res) => {
  const { id } = req.params;
  const { title, description, members, deadline, status } = req.body;

  const updatedProject = projectService.updateProjectById(
    id,
    title,
    description,
    members,
    deadline,
    status
  );
  return res
    .status(200)
    .json({ updatedProject, message: "Updated successfully" });
};

// Delete Project
exports.deleteProject = (req, res) => {
  const { id } = req.params;

  const deletedProject = projectService.deleteProjectById(id);

  if (!deletedProject) {
    return res.status(404).json({ message: "Project not found" });
  }
  return res
    .status(200)
    .json({ message: "Project deleted successfully", deletedProject });
};
