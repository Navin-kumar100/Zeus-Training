const router = require("express").Router();

const {
  getAlltasks,
  createtask,
  updatetask,
  getltask,
  deletetask,
} = require("../controllers/task.controller");

router.route("/").get(getAlltasks).post(createtask);

router.route("/:id").get(getltask).patch(updatetask).delete(deletetask);

module.exports = router;
