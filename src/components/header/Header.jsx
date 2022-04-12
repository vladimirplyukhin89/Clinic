import { useNavigate } from 'react-router-dom';
import Navigation from './navigation/Navigation';

import s from './Header.module.css';
import logoImg from '../../image/logo.svg';

const Header = (rest) => {
    let navigate = useNavigate();
    const goHome = () => navigate('/');

    return (
        <>
            <header className={s.header}>
                <div className={s.container}>
                    <img
                        onClick={goHome}
                        src={logoImg} alt='logo'
                        className={s.logo}

                    />
                    <Navigation {...rest} />
                </div>
            </header>
        </>
    );
};

export default Header;