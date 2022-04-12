import { NavLink } from 'react-router-dom'
import { useState } from 'react';
import cn from 'classnames';

import s from './Navigation.module.css';

const Navigation = ({ active, setActive }) => {
    const [text, setText] = useState('Войти');

    const handleModal = () => {
        setActive(prev => !prev);
        //    setText(text === 'Войти' ? 'Выйти' : 'Войти');
    };

    return (
        <div>
            <NavLink to='/contacts' className={s.contacts}>Контакты</NavLink>
            <button
                onClick={handleModal}
                className={cn(s.login, { [s.active]: active })}
            >
                {text}
            </button>
        </div>
    );
};

export default Navigation;