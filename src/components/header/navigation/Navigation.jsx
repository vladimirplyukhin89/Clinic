import s from './Navigation.module.css';

const Navigation = () => {
    return (
        <div>
            <a href='#' className={s.contacts}>Контакты</a>
            <button className={s.login}>Войти</button>
        </div>
    );
};

export default Navigation;