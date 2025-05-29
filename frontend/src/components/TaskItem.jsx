import { useState, useRef, useEffect } from 'react';
import { useDeleteTaskMutation, useUpdateTaskMutation } from '../store/apis/taskApi';
import { toast } from 'react-toastify';
import { MdOutlineEdit, MdOutlineSave, MdOutlineDelete } from "react-icons/md";

const TaskItem = ({ task }) => {
    const [deleteTask] = useDeleteTaskMutation();

    const [updateTask] = useUpdateTaskMutation();

    const [isEditing, setIsEditing] = useState(false);
    const [editedText, setEditedText] = useState(task.text);

    const inputRef = useRef(null);

    useEffect(() => {
        if (isEditing && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isEditing]);

    const handleDelete = async () => {
        const result = await deleteTask(task._id);

        if (result.error) {
            toast.error(result.error.data?.message || 'Task deletion failed!');
        } else {
            toast.success('Task deleted successfully!');
        }
    };

    const handleUpdate = async () => {
        if (!editedText.trim()) return;

        const result = await updateTask({ id: task._id, text: editedText });
        if (result.error) {
            toast.error(result.error.data?.message || 'Failed to update the task!');
        } else {
            toast.success('Task updated successfully!');
            setIsEditing(false);
        }
    };

    return (
        <div className='task'>
            {isEditing ? (
                <button onClick={handleUpdate} className='edit'><MdOutlineSave /></button>
            ) : (
                <button onClick={() => setIsEditing(true)} className='edit'><MdOutlineEdit /></button>
            )}
            <button onClick={handleDelete} className='close'><MdOutlineDelete /></button>

            <div>{new Date(task.createdAt).toLocaleString('sq-AL')}</div>

            {isEditing ? (
                <input ref={inputRef} className='edit-input' type="text" value={editedText} onChange={(e) => setEditedText(e.target.value)} />
            ) : (
                <h2 style={{ border: "1px solid transparent" }}>{task.text}</h2>
            )}
        </div>
    );
};

export default TaskItem;
