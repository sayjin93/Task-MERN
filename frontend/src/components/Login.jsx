import { FaSignInAlt } from 'react-icons/fa'

import { useState, useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../store/slices/userSlice';
import { useLoginMutation } from '../store/apis/userApi';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' })
    const { email, password } = formData;

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [login, { isLoading }] = useLoginMutation();
    const isLoggedIn = useSelector(state => state.user);

    const onChange = (e) => {
        setFormData(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await login(formData);
            if (response.error) {
                toast.error(response.error.data?.message || response.error.error || 'Registration failed');
            } else {
                dispatch(setUser(response.data));
                localStorage.setItem('user', JSON.stringify(response.data))
                navigate('/');
                toast.success(`Welcome ${response.data.name}!`);

            }
        } catch (err) {
            console.error('Login failed', err);
        }
    }

    useEffect(() => {
        if (isLoggedIn) {
            navigate('/');
        }
    }, [isLoggedIn, navigate]);

    return (
        <>
            <section className='heading'>
                <h1><FaSignInAlt /> Login</h1>
                <p>Login and start creating tasks</p>
            </section>

            <section className='form'>
                <form onSubmit={onSubmit}>
                    <div className='form-group'>
                        <input required type='email' className='form-control' id='email' name='email' value={email} placeholder='Enter your email' onChange={onChange}
                        />
                    </div>
                    <div className='form-group'>
                        <input required type='password' className='form-control' id='password' name='password' value={password} placeholder='Enter password' onChange={onChange}
                        />
                    </div>
                    <div className='form-group'>
                        <button type='submit' disabled={isLoading} className='btn btn-block'>
                            {isLoading ? "Please Wait..." : "Login"}
                        </button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default Login