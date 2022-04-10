import { useState } from 'react';
import Header from '../header/Header';
import Main from '../main/Main';
import Modal from '../modal/Modal';
import Form from '../form_registration/Form';
import Title from '../title/Title';
import Button from '../button/Button';
import WrapperCards from '../wrapper_cards/WrapperCards';

const Layout = () => {
    const [modalActive, setModalActive] = useState(false);
    const [formValid, setFormValid] = useState(false);

    return (
        <>
            <Header
                setActive={setModalActive}
                form={formValid}
                setForm={setFormValid}
            />
            <Main active={modalActive} setActive={setModalActive} />
            <Modal
                active={modalActive}
                setActive={setModalActive}
            >
                <Form
                    active={modalActive}
                    setActive={setModalActive}
                    form={formValid}
                    setForm={setFormValid}
                />
            </Modal>
        </>
    );
};

export default Layout;