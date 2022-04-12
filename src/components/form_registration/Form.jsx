import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { IoClose } from 'react-icons/io5';
import cn from 'classnames';

import s from './Form.module.css';


const Form = ({ active, setActive }) => {
    // Регистрация
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailDirty, setEmailDirty] = useState(false);
    const [passwordDirty, setPasswordDirty] = useState(false);
    const [emailError, setEmailError] = useState('Логин не может быть пустым');
    const [passwordError, setPasswordError] = useState('Пароль не может быть пустым');
    const [formValid, setFormValid] = useState(false);

    // Приватный роутинг
    const navigate = useNavigate();
    const { signin } = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const user = form.username.value;
        signin(user, () => navigate('/login', { replace: true }));
    };

    useEffect(() => {
        if (emailError || passwordError) {
            setFormValid(false);
        } else {
            setFormValid(true);
        }
    }, [emailError, passwordError]);

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'email':
                setEmailDirty(true);
                break;
            case 'password':
                setPasswordDirty(true);
                break;
        }
    };

    // Валидация email
    const emailHandler = (e) => {
        let email = e.target.value;
        setEmail(email);
        const re =
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!re.test(String(email).toLowerCase())) {
            setEmailError('Некорректный емейл');
            if (!email) {
                setEmailError('Емейл не может быть пустым');
            }
        } else {
            setEmailError('');
        }

    };

    // Валидация пароля
    const passwordHandler = (e) => {
        let password = e.target.value;
        setPassword(password);
        if (password.length < 8) {
            setPasswordError('Пароль должен быть минимум 8 символов');
            if (!password) {
                setPasswordError('Пароль не может быть пустым');
            }
        } else {
            setPasswordError('');
        }
    };

    return (
        <>
            <form
                onSubmit={handleSubmit}
                className={s.container}
            >
                <IoClose
                    className={cn(s.close, { [s.active]: active })}
                    onClick={() => setActive(false)}
                />
                <h2 className={s.title}>Регистрация</h2>
                <input
                    className={s.text__input}
                    name='username'
                    type='text'
                    placeholder='Введите свой логин'
                />
                {(emailDirty && emailError) && <div className={s.warning}>{emailError}</div>}
                <input
                    value={email}
                    onBlur={e => blurHandler(e)}
                    onChange={e => emailHandler(e)}
                    className={s.text__input}
                    name='email'
                    type='text'
                    placeholder='Введите свой емейл'
                />
                {(passwordDirty && passwordError) && <div className={s.warning}>{passwordError}</div>}
                <input
                    value={password}
                    onBlur={e => blurHandler(e)}
                    onChange={e => passwordHandler(e)}
                    className={s.text__input}
                    name='password'
                    type='password'
                    placeholder='Введите свой пароль'
                />
                <button
                    className={s.btn}
                    type='submit'
                    disabled={!formValid}
                    onClick={() => setActive(false)}
                >Потвердить</button>
            </form>
        </>
    );
};

export default Form;