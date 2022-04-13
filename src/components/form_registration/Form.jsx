import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { useInput } from '../hooks/useInput';
import { IoClose } from 'react-icons/io5';

import cn from 'classnames';
import s from './Form.module.css';


const Form = ({ active, setActive }) => {
    // Регистрация
    const username = useInput('', { isEmpty: true, minLength: 3 });
    const email = useInput('', { isEmpty: true, minLength: 3, isEmail: true });
    const password = useInput('', { isEmpty: true, minLength: 8 });
    const { formValid } = useInput('');
    console.log(username.formValid, email.formValid, password.formValid);

    // Приватный роутинг
    const navigate = useNavigate();
    const { signin } = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const user = form.username.value;
        signin(user, () => navigate('/login', { replace: true }));
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
                {(username.isDirty && username.isEmpty) && <div className={s.warning}>{username.error.lengthForUser}</div>}
                <input
                    value={username.value}
                    onChange={e => username.onChange(e)}
                    onBlur={e => username.onBlur(e)}
                    className={s.text__input}
                    name='username'
                    type='text'
                    placeholder='Введите своё имя'
                />
                {(email.isDirty && email.emailError) && <div className={s.warning}>Некорректный email</div>}
                <input
                    value={email.value}
                    onChange={e => email.onChange(e)}
                    onBlur={e => email.onBlur(e)}
                    className={s.text__input}
                    name='email'
                    type='text'
                    placeholder='Введите свой емейл'
                />
                {(password.isDirty) && <div className={s.warning}>{password.error.password}</div>}
                {(password.isDirty && password.isEmpty) && <div className={s.warning}>{password.error.lengthForPassword}</div>}
                <input
                    value={password.value}
                    onChange={e => password.onChange(e)}
                    onBlur={e => password.onBlur(e)}
                    className={s.text__input}
                    name='password'
                    type='password'
                    placeholder='Введите свой пароль'
                />
                <button
                    className={s.btn}
                    type='submit'
                    disabled={!username.formValid || !email.formValid || !password.formValid}
                    onClick={() => setActive(false)}
                >Потвердить</button>
            </form>
        </>
    );
};

export default Form;