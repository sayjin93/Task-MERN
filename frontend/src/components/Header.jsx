import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { logoutUser } from '../store/slices/userSlice';

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(state => state.user);

    const handleLogout = () => {
        dispatch(logoutUser());
        navigate('/');
    }
    return (
        <header className='header'>
            <div className="logo">
                <Link to='/'>Task Creator</Link>
            </div>
            <ul>
                {isLoggedIn ? (
                    <li>
                        <button className='btn' onClick={handleLogout}>
                            <FaSignOutAlt /> Logout
                        </button>
                    </li>
                ) : (
                    <>
                        <li>
                            <Link to='/login'><FaSignInAlt /> Login</Link>
                        </li>
                        <li>
                            <Link to='/register'><FaUser /> Register</Link>
                        </li>
                    </>
                )}
            </ul>
        </header>
    )
}

export default Header
