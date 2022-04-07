import Navigation from './navigation/Navigation';

import s from './Header.module.css';
import logoImg from '../../image/logo.png';

const Header = () => {
    return (
        <>
            <header className={s.header}>
                <div className={s.container}>
                    <img src={logoImg} alt='logo' className={s.logo} />
                    <Navigation />
                </div>
            </header>
        </>
    );
};

export default Header;