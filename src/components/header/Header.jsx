import s from './Header.module.css';
import logoImg from '../../image/logo.png';

const Header = () => {
    return (
        <>
            <header className={s.header}>
                <div className={s.container}>
                    <img src={logoImg} alt='logo' />
                    <div className={s.navigation}>
                        <a href='#' className={s.contacts}>Контакты</a>
                        <button className={s.login}>Войти</button>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;