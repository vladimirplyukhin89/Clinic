import { useState, useEffect } from 'react';
import Button from '../button/Button';
import { IoClose } from 'react-icons/io5';
import cn from 'classnames';

import s from './Form.module.css';


const Form = ({ active, setActive, form, setForm, toggleName }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailDirty, setEmailDirty] = useState(false);
    const [passwordDirty, setPasswordDirty] = useState(false);
    const [emailError, setEmailError] = useState('Логин не может быть пустым');
    const [passwordError, setPasswordError] = useState('Пароль не может быть пустым');
    //const [formValid, setFormValid] = useState(false);

    useEffect(() => {
        if (emailError || passwordError) {
            setForm(false)
        } else {
            setForm(true)
        }
    }, [emailError, passwordError, toggleName])

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
                setEmailError('Логин не может быть пустым');
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
            <form className={s.container}>
                <IoClose
                    className={cn(s.close, { [s.active]: active })}
                    onClick={() => setActive(false)}
                />
                <h2 className={s.title}>Регистрация</h2>
                {(emailDirty && emailError) && <div className={s.warning}>{emailError}</div>}
                <input
                    value={email}
                    onBlur={e => blurHandler(e)}
                    onChange={e => emailHandler(e)}
                    className={s.text__input}
                    name='email'
                    type='text'
                    placeholder='Введите свой логин'
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
                <Button
                    disabled={!form}
                    type='submit'
                    text='Потвердить'
                    color='rgba(255, 104, 91, 1)'
                    colorBg='rgba(255, 255, 255, 1)'
                />
            </form>
        </>
    );
};

export default Form;