import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useCreateTaskMutation } from '../store/apis/taskApi';

const TaskForm = () => {
    const navigate = useNavigate();
    const [text, setText] = useState("");
    const [createTask, { isLoading }] = useCreateTaskMutation();

    const onSubmit = async (e) => {
        e.preventDefault();
        if (!text.trim()) return;

        try {
            await createTask({ text });
            setText('');
            navigate('/alltasks');
            toast.success('Task created successfully!');
        } catch (err) {
            toast.error(err?.data?.message || 'Something went wrong!');
        }
    };

    return (
        <section className='form'>
            <form onSubmit={onSubmit}>
                <div className='form-group'>
                    <label htmlFor='text' style={{ fontWeight: 'bolder' }}>Enter Task</label>
                    <input required type='text' id='text' value={text} onChange={e => setText(e.target.value)}
                    />
                </div>
                <div className='form-group'>
                    <button className='btn btn-block' type='submit' disabled={isLoading}>
                        {isLoading ? 'Adding...' : 'Add Task'}
                    </button>
                </div>
            </form>
        </section>
    )
}

export default TaskForm
