import { useState } from 'react';
import Button from '../button/Button';
import { IoClose } from 'react-icons/io5';
import cn from 'classnames';

import s from './Form.module.css';


const Form = ({ active, setActive }) => {
    const [close, setClose] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
            <form className={s.container}>
                {
                    <IoClose
                        className={cn(s.close, { [s.active]: active })}
                        onClick={() => setActive(false)}
                    />
                }
                <h2 className={s.title}>Регистрация</h2>
                <input className={s.text__input} name='email' type='text' placeholder='Введите свой логин' required />
                <input className={s.text__input} name='password' type='password' placeholder='Введите свой пароль' required />
                <Button
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