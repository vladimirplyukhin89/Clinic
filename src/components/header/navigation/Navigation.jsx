import { useState, useEffect } from 'react';
import s from './Navigation.module.css';

const Navigation = ({ setActive, form, setForm }) => {
    const [text, setText] = useState('Войти');

    const toggleModalText = () => {
        setText(text === 'Войти' ? 'Выйти' : 'Войти');
    }

    useEffect(() => {
        if (text === 'Выйти') {
            setActive((prev) => !prev);
        }
    }, [text]);

    return (
        <div>
            <a href='#' className={s.contacts}>Контакты</a>
            <button
                onClick={toggleModalText}
                className={s.login}
            >
                {text}
            </button>
        </div>
    );
};

export default Navigation;