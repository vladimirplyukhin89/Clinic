import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth';

import cn from 'classnames';
import s from './Navigation.module.css';

const Navigation = ({ active, setActive }) => {
    const navigate = useNavigate();
    const { user, signout } = useAuth();

    const handleOnClick = () => {
        if (user) {
            signout(() => navigate('/', { replace: true }));
        } else {
            setActive(true);
        }
    };

    return (
        <div>
            <NavLink to='/contacts' className={s.contacts}>Контакты</NavLink>
            <button
                onClick={handleOnClick}
                className={cn(s.login, { [s.active]: active })}
            >
                {user ? 'Выйти' : 'Войти'}
            </button>
        </div>
    );
};

export default Navigation;