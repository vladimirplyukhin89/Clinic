import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useAuth } from '../hooks/useAuth';
import { IoClose } from 'react-icons/io5';
import users from '../../users.json';

import cn from 'classnames';
import s from './loginForm.module.css';


const Form = ({ active, setActive }) => {
    // Регистрация
    const [error, setError] = useState(false);
    const {
        register,
        formState: { errors, isValid, isSubmitSuccessful },
        handleSubmit,
        watch,
        reset
    } = useForm({
        mode: 'all',
        defaultValues: {
            name: '',
            password: ''
        }
    });

    useEffect(() => {
        if (isSubmitSuccessful) {
            reset({
                name: '',
                password: ''
            })
        }
    }, [isSubmitSuccessful, reset]);

    // Приватный роутинг
    const navigate = useNavigate();
    const { signin } = useAuth();

    const onSubmit = () => {

        const login = watch('name');
        const password = watch('password');
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
                onSubmit={handleSubmit(onSubmit)}
                className={s.container}
            >
                <IoClose
                    className={cn(s.close, { [s.active]: active })}
                    onClick={() => setActive(false)}
                />
                <h3 className={s.title}>Авторизация</h3>
                <div className={s.input__wrapper}>
                    <input
                        {...register('name', {
                            required: {
                                value: true,
                                message: 'Поле обязательно к заполнению'
                            },
                        })}
                        className={s.text__input}
                        name='name'
                        placeholder='Имя пользователя'
                    />
                    <div>
                        {error && <p className={s.warning}>Неверное имя пользователя или пароль</p>}
                        {errors?.name &&
                            <p className={s.warning} >{errors?.name?.message || Error}</p>}
                    </div>
                </div>
                <div className={s.input__wrapper}>
                    <input
                        {...register('password', {
                            required: {
                                value: true,
                                message: 'Поле обязательно к заполнению'
                            },
                            minLength: {
                                value: 8,
                                message: 'Минимум 8 символов'
                            }
                        })}
                        className={s.text__input}
                        name='password'
                        type='password'
                        placeholder='Пароль'
                    />
                    <div>
                        {errors?.password &&
                            <p className={s.warning}> {errors?.password?.message || Error}</p>}
                    </div>
                </div>
                <button
                    className={s.btn}
                    type='submit'
                    disabled={!isValid}
                >Потвердить</button>
            </form>
        </>
    );
};

export default Form;