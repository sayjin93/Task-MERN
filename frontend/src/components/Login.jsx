import { FaSignInAlt } from 'react-icons/fa'

import { useState } from "react"
import { useDispatch } from 'react-redux';
import { setUser } from '../store/slices/userSlice';
import { useLoginMutation } from '../store/apis/userApi';

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' })
    const { email, password } = formData;

    const [login, { isLoading, error }] = useLoginMutation();
    const dispatch = useDispatch();

    const onChange = e => {
        setFormData(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await login(formData);
            if (data) dispatch(setUser(data));
        } catch (err) {
            console.error('Login failed', err);
        }
    }

    return (
        <>
            <section className='heading'>
                <h1><FaSignInAlt /> Login</h1>
                <p>Login and start creating tasks</p>
            </section>
            <section className='form'>
                <form onSubmit={onSubmit}>
                    <div className='form-group'>
                        <input type='email' className='form-control' id='email' name='email' value={email} placeholder='Enter your email' onChange={onChange}
                        />
                    </div>
                    <div className='form-group'>
                        <input type='password' className='form-control' id='password' name='password' value={password} placeholder='Enter password' onChange={onChange}
                        />
                    </div>
                    <div className='form-group'>
                        <button type='submit' disabled={isLoading} className='btn btn-block'>Submit</button>
                        {error && <p style={{ color: 'red' }}>Login failed</p>}
                    </div>
                </form>
            </section>
        </>
    )
}

export default Login