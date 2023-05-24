import { Link, useNavigate } from 'react-router-dom'
import styles from './header.module.css'
import { logout } from '../../../states/features/users';
import { useAuthContext } from '../../../context/auth';

export default function Header() {
    const navigate = useNavigate();
    const auth = useAuthContext();

    return (
        <header className={styles.wrapper}>
            <div className={styles.header}>
                <h2 onClick={() => navigate("/")} className='pointer'>Forum Dicoding App</h2>
                <div className='menu-horizontal'>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/leaderboards">Leaderboards</Link>
                        </li>
                        {
                            !auth.user ?
                                <li>
                                    <Link to="/login">
                                        Login
                                    </Link>
                                </li>
                                :
                                <li>
                                    <a className='pointer'
                                        onClick={() => {
                                            logout();
                                        }}>Logout</a>
                                </li>
                        }
                    </ul>
                </div>

            </div>
        </header>
    )
}


