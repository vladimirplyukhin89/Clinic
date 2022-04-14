import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../header/Header';

import s from './Layout.module.css';

const Layout = () => {
    const [modalActive, setModalActive] = useState(false);

    return (
        <>
            <Header active={modalActive} setActive={setModalActive} />
            <main className={s.container}>
                <Outlet context={[modalActive, setModalActive]} />
            </main>
        </>
    );
};

export default Layout;