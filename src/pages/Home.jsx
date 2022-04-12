import { useOutletContext, useNavigate } from "react-router-dom";
import Title from '../components/title/Title';
import Button from '../components/button/Button';
import WrapperCards from '../components/wrapper_cards/WrapperCards';
import Form from '../components/form_registration/Form'
import Modal from '../components/modal/Modal';

const Home = () => {
    const [modalActive, setModalActive] = useOutletContext();

    const handlerModal = () => {
        setModalActive(prev => !prev);
        //    setText(text === 'Войти' ? 'Выйти' : 'Войти');
    };
    let navigate = useNavigate();

    return (
        <>
            <section>
                <Title
                    title='Место для получения медицинской помощи'
                />
                <Button
                    type='text'
                    text='Войти'
                    color='rgba(255, 255, 255, 1)'
                    colorBg='rgba(255, 104, 91, 1)'
                    margin='10px'
                    handler={handlerModal}
                />
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