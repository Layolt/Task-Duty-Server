const express = require('express');
const { 
    getAllTasks,
    getSingleTask, 
    updateTask, 
    deleteTask, 
    createTask
} = require('../controllers/taskController');
const methodNotAllowed = require("../utils/methodNotAllowed");

const router = express.Router()

router.route("/").get(getAllTasks).post(createTask).all(methodNotAllowed);
router
.route("/:id")
.get(getSingleTask)
.patch(updateTask)
.delete(deleteTask)
.all(methodNotAllowed)
module.exports = router;