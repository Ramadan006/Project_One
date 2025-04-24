const express = require("express");
const router = express.Router();
const projectController = require("../controllers/projectController");

router.post("/", projectController.create);
router.get("/", projectController.getProjects);
router.post("/update/:id", projectController.updateProject);
router.delete("/:id", projectController.deleteProject);

module.exports = router;
