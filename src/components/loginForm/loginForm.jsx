import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useInput } from '../hooks/useInput';
import { IoClose } from 'react-icons/io5';
import users from '../../users.json';

import cn from 'classnames';
import s from './loginForm.module.css';


const Form = ({ active, setActive }) => {
    // Регистрация
    const [error, setError] = useState(false);
    const login = useInput('', { isEmpty: true, minLength: 3 });
    const password = useInput('', { isEmpty: true, minLength: 8 });
    const { formValid } = useInput('');

    // Приватный роутинг
    const navigate = useNavigate();
    const { signin } = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const login = form.login.value;
        const password = form.password.value;
        const user = users.find(user => user.login === login && user.password === password);

        if (user !== null && user !== undefined) {
            setActive(false);
            setError(false);
            signin(user, () => navigate('/profile', { replace: true }));
        } else {
            setError(true);
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
                <h2 className={s.title}>Авторизация</h2>
                <div className={s.input__wrapper}>
                    <input
                        value={login.value}
                        onChange={e => login.onChange(e)}
                        onBlur={e => login.onBlur(e)}
                        className={s.text__input}
                        name='login'
                        type='text'
                        placeholder='Имя пользователя'
                    />
                    <p>
                        {error && <div className={s.warning}>Неверное имя пользователя или пароль</div>}
                    </p>
                    <p>
                        {(login.isDirty && login.isEmpty) && <div className={s.warning}>{login.error.lengthForUser}</div>}
                    </p>
                </div>
                <div className={s.input__wrapper}>
                    <input
                        value={password.value}
                        onChange={e => password.onChange(e)}
                        onBlur={e => password.onBlur(e)}
                        className={s.text__input}
                        name='password'
                        type='password'
                        placeholder='Пароль'
                    />
                    <p>
                        {(password.isDirty) && <div className={s.warning}>{password.error.password}</div>}
                    </p>
                    <p>
                        {(password.isDirty && password.isEmpty) && <div className={s.warning}>{password.error.lengthForPassword}</div>}
                    </p>
                </div>
                <button
                    className={s.btn}
                    type='submit'
                    disabled={!login.formValid || !password.formValid}
                >Потвердить</button>
            </form>
        </>
    );
};

export default Form;