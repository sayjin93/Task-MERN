import { useDispatch } from 'react-redux';

const TaskItem = ({ task }) => {
    return (
        <div className='task'>
            <div>{new Date(task.createdAt).toLocaleString('sq-AL')}</div>
            <h2>{task.text}</h2>
        </div>
    );
};

export default TaskItem;
