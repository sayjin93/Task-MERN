const getTasks = (req, res) => {
    res.status(200).json({ message: "Get All Tasks" });
}

const setTask = (req, res) => {
    res.status(200).json({ message: 'Create Task' });
}

const updateTask = (req, res) => {
    res.status(200).json({ message: `Task ${req.params.id} updated.` });
}

const deleteTask = (req, res) => {
    res.status(200).json({ message: `Task ${req.params.id}  deleted.` });
}


module.exports = { getTasks, setTask, updateTask, deleteTask };