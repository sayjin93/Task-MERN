const asyncHandler = require('express-async-handler');

const getTasks = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "Get All Tasks" });
})

const setTask = asyncHandler(async (req, res) => {
    if (!req.body || !req.body.text) {
        res.status(400)
        throw new Error('Please enter a task');
    }

    res.status(200).json({ message: 'Create Task' });
})

const updateTask = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Task ${req.params.id} updated.` });
})

const deleteTask = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Task ${req.params.id}  deleted.` });
})


module.exports = { getTasks, setTask, updateTask, deleteTask };