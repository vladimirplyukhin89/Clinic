import s from './Navigation.module.css';

const Navigation = ({ setActive }) => {
    return (
        <div>
            <a href='#' className={s.contacts}>Контакты</a>
            <button
                onClick={() => setActive(true)}
                className={s.login}
            >
                Войти
            </button>
        </div>
    );
};

export default Navigation;