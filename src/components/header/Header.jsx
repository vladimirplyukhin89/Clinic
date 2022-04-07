import s from './header.module.css';

const Header = () => {
    return (
        <>
            <header className={s.header}>
                <div className={s.container}>
                    <img src='../../image/logo.jpg' alt='logo' className={s.logo} />
                    <div className={s.navigation}>
                        <a href='№' className={s.contacts}>Контакты</a>
                        <button className={s.login}>Войти</button>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;