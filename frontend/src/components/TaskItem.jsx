import { useDeleteTaskMutation } from '../store/apis/taskApi';
import { toast } from 'react-toastify';

const TaskItem = ({ task }) => {
    const [deleteTask] = useDeleteTaskMutation();

    const handleDelete = async () => {
        const result = await deleteTask(task._id);

        if (result.error) {
            toast.error(result.error.data?.message || 'Fshirja dështoi!');
        } else {
            toast.success('Detyra u fshi me sukses!');
        }
    };

    return (
        <div className='task'>
            <div>{new Date(task.createdAt).toLocaleString('sq-AL')}</div>
            <h2>{task.text}</h2>
            <button onClick={handleDelete} className='close'>X</button>
        </div>
    );
};

export default TaskItem;
