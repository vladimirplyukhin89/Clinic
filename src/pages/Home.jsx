import { useOutletContext, useNavigate } from "react-router-dom";
import { useAuth } from '../components/hooks/useAuth';
import Title from '../components/title/Title';
import Button from '../components/button/Button';
import WrapperCards from '../components/wrapper_cards/WrapperCards';
import Form from '../components/loginForm/loginForm'
import Modal from '../components/modal/Modal';

const Home = () => {
    const [modalActive, setModalActive] = useOutletContext();
    const navigate = useNavigate();
    const { user, signout } = useAuth();

    const handleOnClick = () => {
        if (user) {
            signout(() => navigate('/', { replace: true }));
        } else {
            setModalActive(true);
        }
    };

    return (
        <>
            <section>
                <Title
                    title='Место для получения медицинской помощи'
                    marginTop='40px'
                />
                <button
                    style={{
                        color: 'var(--colors-bg)',
                        backgroundColor: 'var(--colors-t-first)',
                        margin: '10px',
                        padding: '15px 40px',
                        fontSize: 'var(--fs-sm)',
                        fontWeight: 'var(--fw-bold)',
                        borderRadius: 'var(--border-header)',
                        border: '1px solid var(--colors-t-first)',
                    }}
                    onClick={handleOnClick}
                >
                    {user ? 'Выйти' : 'Войти'}
                </button>
                <Button
                    type='text'
                    text='Контакты'
                    color='rgba(255, 104, 91, 1)'
                    colorBg='rgba(255, 255, 255, 1)'
                    handler={() => navigate('/contacts', { replace: true })}
                />
                <WrapperCards />
                <Modal active={modalActive} setActive={setModalActive}>
                    <Form active={modalActive} setActive={setModalActive} />
                </Modal>
            </section>
        </>
    );
};

export default Home;